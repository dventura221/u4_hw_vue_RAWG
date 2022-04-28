<template>
  <div>
    <div class="search">
      <!-- Search Form Goes Here -->
      <h2>Search Results</h2>
      <section class="search-results container-grid"></section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section  class="container-grid" >
        <div v-for="genre in genres" :key="genre.id">
          <GenreCard :genre="genre"/>
        </div>  
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GameCard.vue'
  const API_KEY = process.env.VUE_APP_API_KEY
  export default {
    name: 'HomePage',
    components: {
      GenreCard
    },
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    mounted: function() {
      this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(
          `https://api.rawg.io/api/genres?key=${API_KEY}`
        )
        console.log(res.data.results)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
      },
      handleChange(event) {
        console.log(event)
      },
      selectGame(gameId) {
        console.log(gameId)
      }
    }
  }
</script>
