<template>
  <div class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" alt="img" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3></h3>
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
    mounted: function() {
      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        // Get game id from router here
        const details = await axios.get(
          `https://api.rawg.io/api/games/${this.$route.params.game_id}?key=${API_KEY}`
        )
        console.log(details)
        this.gameDetails = details
      }
    }
  }
</script>
