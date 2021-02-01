<script>
import HelloComponent from './components/hello.vue'
import ClockComponent from './components/clock.vue'
import { APIClient } from './services'

export default {
  components: {
    'app-hello': HelloComponent,
    'app-clock': ClockComponent
  },

  data () {
    return {
      customers: [],
    }
  },

  computed: {
    customer () {
      const index = Math.floor(Math.random() * 3)
      return this.customers[index]
    }
  },

  async created () {
    this.customers = await APIClient.getCustomers()
  }
}

</script>

<template>

  <main>
    <app-hello v-if="customer" :customer="customer" />
  </main>

  <footer>
    <app-clock />
  </footer>

</template>

<style scoped>
main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

footer {
  flex: 0;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  background-color: #1f3763;
  color: white;
}
</style>
