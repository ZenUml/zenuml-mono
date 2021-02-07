import vue from '@vitejs/plugin-vue'

/**
 * Build configuration for client code, executed in the browser
 */
export default {
  plugins: [
    vue()
  ],

  build: {
    lib: {
      entry: 'src/index.js'
    },
    minify: 'eslint'
  }
}
