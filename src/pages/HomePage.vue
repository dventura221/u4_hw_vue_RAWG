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
      <section class="search-results container-grid">
        <div v-for="result in searchResults" :key="result.id" >
          <GameCard 
            :result="result" 
            @click="selectGame(result.id)"
            />
        </div>  
      </section>
    </div>

    <div v-if="!searched" class="genres">
      <h2>Genres</h2>
      <section  class="container-grid" >
        <div v-for="genre in genres" :key="genre.id">
          <GenreCard :genre="genre" @click="selectGenre(genre.id)"/>
        </div>  
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GenreCard.vue'
  import GameCard from '../components/GameCard.vue'
  const API_KEY = process.env.VUE_APP_API_KEY
  export default {
    name: 'HomePage',
    components: {
      GenreCard,
      GameCard
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
        //console.log(res.data.results)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const results = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`
        )
        //console.log(results.data.results)
        this.searchResults = results.data.results
        this.searched = true
        this.searchQuery = ''
      },
      handleChange(event) {
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
      selectGenre(genreId) {
        this.$router.push(`/genre/${genreId}`)
      }
    }
  }
</script>
