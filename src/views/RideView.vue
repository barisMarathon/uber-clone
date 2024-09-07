<template>
  <div class="bg-gray-800 min-h-screen flex items-center justify-center relative">
    <div id="BackBtn" class="absolute z-50 rounded-full bg-white p-1 top-8 left-4 cursor-pointer" @click="goBack()">
      <ArrowLeftIcon fillColor="#000000" :size="40" />
    </div>
    <div class="circle">
      <p1 class="text">Your Uber Driver is on their way!</p1>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';




const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<style lang="scss">
/* Ensure the body and html cover the full viewport */
html,
body {
  height: 100%;
  margin: 0;
}

.bg-gray-800 {
  background-color: #2d2d2d;
  /* Tailwind gray-800 color */
}

.circle {
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 24px;
  font-weight: bold;
}

.text {
  text-align: center;
}
</style>
