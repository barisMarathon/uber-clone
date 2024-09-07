// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useDirectionStore = defineStore('direction', {
  state: () => ({
    pickup: null,
    destination: null,
  }),
  persist: true
 
});
export const useRideStore = defineStore('rideStore', () => {
  const selectedRide = ref('UberX'); // Default value or none

  const selectRide = (ride) => {
    selectedRide.value = ride;
  };

  return { selectedRide, selectRide };
});