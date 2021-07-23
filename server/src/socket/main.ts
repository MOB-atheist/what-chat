const socket = (server: any) => {
  const io = require('socket.io')(server)

  io.on('connection', (socket: any) => {
    socket.on('message', (data: object) => {
      console.log('Message: ', data)
    })
  })
}

export default socket
