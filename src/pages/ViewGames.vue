<template>
  <div class="sort-bar">
    <h3 class="genres">Sort by Rating:</h3>
    <select @change="sortGames()" name="sortBy" id="select" v-model="sortBy">
      
      <option value="Highest"
      >Highest to Lowest</option>
      <option value="Lowest" 
      >Lowest to Highest</option>
    </select>
  </div>  
  <div className="container-grid">
    <div v-for="result in games" :key="result.id" >
      <GameCard 
        :result="result" 
        @click="selectGame(result.id)"
        />
    </div>
  </div>  
</template>

<script>
  import axios from 'axios'
  const API_KEY = process.env.VUE_APP_API_KEY
  import GameCard from '../components/GameCard.vue'

  export default {
    name: 'ViewGames',
    components: {
      GameCard
    },
    data: () => ({
      games: [],
      sortBy: "Highest"
    }),
    mounted() {
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        const res = await axios.get(
        `https://api.rawg.io/api/games?genres=${this.$route.params.genre_id}&key=${API_KEY}`
        )
        this.games = res.data.results.sort((a, b) => {
          return b.rating - a.rating})
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
      sortGames() {
        if (this.sortBy === "Highest") {this.games.sort((a, b) => {
          return b.rating - a.rating
        })} else {
        this.games.sort((a, b) => {
          return a.rating - b.rating
        })}
      }
    }
  }  
</script>
