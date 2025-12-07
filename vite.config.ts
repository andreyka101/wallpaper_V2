import {resolve} from 'path'

export default {
  base: '/wallpaper_V2/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
}