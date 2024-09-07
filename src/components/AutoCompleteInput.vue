<template>
  <div id="AutoCompeleteInput" class="flex items-center">
    <input :id="theId" v-model="inputComputed" @click="$emit('isActive', true)" type="text" class="
      text-md
      bg-gray-100
      apperance-none
      w-full
      py-2.5
      px-3
      text-gray-700
      leading-tight
      focus:outline-none
      focus:shadow-outline
      focus:bg-gray-200" :placeholder="placeholder" autocomplete="off">
    <WindowCloseIcon @click="emit('clearInput')" fillColor="#2e2e2d" />
  </div>
</template>

<script setup>
import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue'
import { toRefs, defineProps, defineEmits, computed } from 'vue'
const emit = defineEmits(['update:input', 'clearInput', 'isActive'])
const props = defineProps({
  theId: String,
  placeholder: String,
  input: String,
})
const { placeholder, input, theId } = toRefs(props)
const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val),
})
</script>
