<template>
  <div class="not-found-container">
    <ContactSection/>
  </div>
</template>

<script>
import ContactSection from './sections/ContactSection.vue';

export default {
  components: {
    ContactSection
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
