<template>
  <div class="loader-wrapper">
    <div class="loader loader5">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.loader-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loader {
  margin: 20px;
}
.loader5 {
  width: 128px;
  height: 128px;
  color: gray;
}
.loader5 div {
  transform-origin: 64px 64px;
  animation: fade 1.2s linear infinite;
}
.loader5 div::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 20%;
  top: 6px;
  left: 58px;
  height: 28px;
  width: 10px;
  background-color: gray;
}
.loader5 div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.loader5 div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.loader5 div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.loader5 div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.loader5 div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.loader5 div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.loader5 div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.loader5 div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.loader5 div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.loader5 div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.loader5 div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.loader5 div:nth-child(12) {
  transform: rotate(330deg);
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
