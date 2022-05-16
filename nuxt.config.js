export default {
  target: 'static',
  
  head: {
    title: 'Your Site Title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: 'apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'assets/style/main.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
    ],
    script: [{ src: "https://kit.fontawesome.com/d98da4d885.js", crossorigin: 'anonymous' }]
  },
  
  loading: { color: '#fff' },
  
  css: [],
  
  plugins: [],
  
  modules: [],
  
  build: {
    extend(config, ctx) { },
  },
};
