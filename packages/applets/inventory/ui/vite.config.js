import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'inventory.ui'
    }
  }
}