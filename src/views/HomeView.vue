<template>
  <div id="Home" class="flex flex-col h-screen">
    <div class="m-3 mb-auto">
      <div class="my-20">
        <img src="img/uber/uber2.svg" width="150">

      </div>
      <div class="grid grid-cols-2 gap-3 my-3">
        <ServiceSelectLarge image-width="74" text="Ride" image="ride" @click="router.push('/directions')" />
        <ServiceSelectLarge image-width="74" text="Food" image="food" :promo="true" @click="goToMcdonalds" />
      </div>
      <div class="grid grid-cols-4 gap-3 my-3">
        <ServiceSelectSmall text="2 Wheels" image="2wheels" @click="lime" />
        <ServiceSelectSmall text="Transit" image="transit" @click="transportation" />
        <ServiceSelectSmall text="Reserve" image="reserve" @click="hotel" />
        <ServiceSelectSmall text="Travel" image="travel" @click="travel" />
      </div>

      <div @click="router.push('/directions')" class="w-full bg-custom-color h-14 rounded-full flex items-center p-3">
        <MagnifyIcon :size="40" />
        <div class="ml-3 text-xs font-semibold text-gray-700">
          Enter pick-up point
        </div>
      </div>
    </div>
    <footer class="w-full z-50 flex justify-around p-1 mb-2 border-t-2 border-t-gray-200">
      <div class="grid place-items-center">
        <HomeIcon :size="30" fillColor="#1f1e1e" />
        <div class="w-full -mt-1 text-xs text-center text-gray-800 font-semibold">
          Home
        </div>
      </div>
      <div @click="router.push('/directions')" class="grid place-items-center cursor-pointer">
        <MapMarkerIcon :size="30" fillColor="#1f1e1e" />
        <div class="w-full -mt-1 text-xs text-center text-gray-800 font-semibold">
          Destination
        </div>
      </div>

    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useDirectionStore } from '@/store/direction-store';
import { onMounted } from 'vue';
import ServiceSelectLarge from '../components/ServiceSelectLarge.vue'
import ServiceSelectSmall from '@/components/ServiceSelectSmall.vue';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'

const router = useRouter()
const direction = useDirectionStore()


onMounted(() => {
  direction.pickup = ''
  direction.destination = ''
}

)

const goToMcdonalds = () => {
  window.location.href = 'https://www.mcdonalds.com';
}

const lime = () => {
  window.location.href = 'https://www.li.me/';
}

const transportation = () => {
  window.location.href = 'https://www.istanbulkart.istanbul/OurCards'
}
const travel = () => {
  window.location.href = 'https://www.skyscanner.com.tr/'
}
const hotel = () => {
  window.location.href = 'https://www.airbnb.com.tr/'
}

</script>



<ServiceSelectSmall text="Ride" image="ride" />
<style lang="scss" scoped>
#Home {
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }
}
</style>