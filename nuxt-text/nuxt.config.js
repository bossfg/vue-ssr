
export default {
  mode: 'universal',//多页
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image', href: '/timg.jpg' }
    ]
  },
  router: {
    middleware: ['visit', 'user-agent']
  },
  env: {
    users: [
      { id: 1, name: 'Kobe Bryant', number: 1 },
      { id: 2, name: 'Michael Jordan', number: 2 },
      { id: 3, name: 'Stephen Curry', number: 3 },
      { id: 4, name: 'Lebron James', number:4 },
      { id: 5, name: 'Kevin Durant', number: 5 },
      { id: 6, name: 'Kyrie Irving', number: 6 }
    ]
  },
  generate: {
    routes: [
      '/about/1',
      '/2',
      '/3',
      '/4',
      '/5',
      '/6'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/router'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
