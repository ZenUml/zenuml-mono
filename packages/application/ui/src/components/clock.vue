<script>
import { ref, computed } from 'vue'
import { now } from '@vite-monorepo-example/utilities'

export default {
  setup () {
    const time = ref(now())
    const timeString = computed(() => time.value.toTimeString().substr(0, 8))

    // Keep updating the clock every second
    setInterval(() => {
      time.value = now()
    }, 1000)

    return {
      time,
      timeString
    }
  }
}

</script>

<template>
  <span class="clock">{{ timeString }}</span>
</template>

<style scoped>
.clock {
  font-weight: bold;
}
</style>
