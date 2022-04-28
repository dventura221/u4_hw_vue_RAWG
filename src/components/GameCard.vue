<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img v-if="genre.image_background" :src="genre.image_background" alt="img" />
      <p v-else>Loading...</p>
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{ genre.name }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: ['genre']
  }
</script>
