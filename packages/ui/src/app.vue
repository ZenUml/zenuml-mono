<script>
import HelloComponent from './components/hello.vue'
import ClockComponent from './components/clock.vue'
import { Contact } from '@vite-monorepo-example/model'

export default {
  components: {
    'app-hello': HelloComponent,
    'app-clock': ClockComponent
  },

  data () {
    return {
      contact: new Contact({
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
      })
    }
  }
}

</script>

<template>

  <main>
    <app-hello :contact="contact" />
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
