<script>
import { ref, computed } from 'vue'
import { now } from '@vue-vite-monorepo/utilities'

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
  <footer>
    <span class="clock">{{ timeString }}</span>
  </footer>
</template>

<style scoped lang="scss">
footer {
  flex: 0;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  background-color: #1f3763;
  color: white;

  .clock {
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>
