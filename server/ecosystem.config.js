module.exports = {
  apps: [
    {
      name: 'what-chat',
      script: './dist/index.js',
      watch: true,
      env: {
        PORT: 4000,
        NODE_ENV: 'production'
      }
    }
  ]
}
