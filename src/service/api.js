import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import io from 'socket.io-client'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'

const socket = io('http://localhost:3030') // DEVELOPMENT
// const socket = io('https://sportify.herokuapp.com') // PRODUCTION

const storage = process.env.TYPE = 'CLIENT' ? window.localStorage : null

const api = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ storage }))

export const users = api.service('users')

export default api
