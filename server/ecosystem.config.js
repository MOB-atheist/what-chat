module.exports = {
  apps: [
    {
      name: 'what-chat',
      script: './dist/index.js',
      watch: true,
      env: {
        PORT: 80,
        NODE_ENV: 'production'
      }
    }
  ]
}
