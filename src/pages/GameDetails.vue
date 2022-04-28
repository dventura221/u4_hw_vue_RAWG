<template>
  <div v-if="gameDetails" class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" alt="img" />
      </div>
    </section>
    <section class="details">
      <button @click="backHome">Return to Home</button> 
      <div class="flex-row space"></div>
      <div>
        <h2>{{gameDetails.name}}</h2>
        <h3>Rating: {{gameDetails.rating}}/5</h3>
        <h3>Rating Breakdown:</h3>
        <div v-for="score in gameDetails.ratings" :key="score.id">
          <p> - {{score.title}}: {{score.count}} at {{score.percent}}% </p>
        </div>  
        <p>Description: {{gameDetails.description_raw}}</p>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  const API_KEY = process.env.VUE_APP_API_KEY
  
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null
    }),
    mounted() {
      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        // Get game id from router here
        const details = await axios.get(
          `https://api.rawg.io/api/games/${this.$route.params.game_id}?key=${API_KEY}`
        )
        //console.log('Details', details.data)
        this.gameDetails = details.data
      },
      backHome() {
        this.$router.push('/')
      }
    }
  }
</script>
