<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input
          type="text"
          :value="searchQuery"
          placeholder="Search Games"
          name="search"
          @input="handleChange"
        />
        <button>Submit</button>
      </form>
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
        const results = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`
        )
        this.searchResults = results.data.results
        //console.log(results.data.results)
      },
      handleChange(event) {
        console.log(event)
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        console.log(gameId)
      }
    }
  }
</script>
