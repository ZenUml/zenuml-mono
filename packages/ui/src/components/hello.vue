<script>
import { Contact } from '@vite-monorepo-example/model'
import { capitalize } from '@vite-monorepo-example/utilities'

export default {
  props: {
    contact: {
      type: Contact,
      required: true
    }
  },

  methods: {
    capitalize
  }
}
</script>


<template>
  <h1>Hello, {{ capitalize(contact.fullName) }}!</h1>
</template>


<style scoped lang="scss">
h1 {
  color: #205c41;

  &:hover {
    color: #550d19;
  }
}
</style>
