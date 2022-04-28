<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img v-if="result.background_image" :src="result.background_image" alt="img" />
      <p v-else>Loading...</p>
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{ result.name }}</h3>
      <h4>Rating: {{result.rating}}/5</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: ['result']
  }
</script>
