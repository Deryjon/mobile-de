<template>
  <div class="not-found-container">
    <NewsSection/>
  </div>
</template>

<script>
import NewsSection from './sections/NewsSection.vue';

export default {
  components: {
    NewsSection
  },
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.not-found-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}


</style>
