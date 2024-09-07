<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
.slide-leave-active {
  transition: transform 0.175s ease-out;
}

.slide-leave-to {
  transform: translate(-100%, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
  /* Adjust timing and easing as needed */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>