<template>
  <div class="not-found-container">
    <h1 class="not-found-title">404 - Page not found</h1>
    <p class="not-found-message">Sorry, the page you requested does not exist.</p>
    <!-- Добавьте здесь любое дополнительное содержимое или ссылки -->
  </div>
</template>

<script>
export default {
  // Возможно, здесь вы захотите добавить логику для страницы 404
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.not-found-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1.2rem;
}
</style>
