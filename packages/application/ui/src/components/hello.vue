<script>
import { Customer } from '@vite-monorepo-example/model'
import { capitalize } from '@vite-monorepo-example/utilities'

export default {
  props: {
    customer: {
      type: Customer,
      required: true
    }
  },

  setup () {
    return {
      capitalize
    }
  }
}
</script>


<template>
  <main>
    <h1>Hello, {{ capitalize(customer.fullName) }}!</h1>
    <h3>{{ capitalize('welcome to vite + vue + lerna experiment') }}</h3>
  </main>
</template>


<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1, h3 {
    color: #205c41;

    &:hover {
      color: #550d19;
    }
  }
}
</style>
