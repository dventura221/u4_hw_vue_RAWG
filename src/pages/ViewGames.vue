<template>
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
      games: []
    }),
    mounted() {
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        // Get Genre Id here
        const res = await axios.get(
        `https://api.rawg.io/api/games?genres=${this.$route.params.genre_id}&key=${API_KEY}`
        )
        console.log(res)
        this.games = res.data.results
      },
      selectGame(gameId) {
        console.log(gameId)
        this.$router.push(`/details/${gameId}`)
      },
    }
  }
</script>
