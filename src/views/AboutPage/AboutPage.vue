<template>
  <div class="not-found-container">
    <AboutSection/>
  </div>
</template>

<script>
import AboutSection from './sections/AboutSection.vue';

export default {
  components: {
    AboutSection
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
