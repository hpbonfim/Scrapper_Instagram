 
import API from './server'
const PORT = process.env.PORT || 3333

process.once('SIGUSR2', () => process.kill(process.pid, 'SIGUSR2'))

process.on('SIGINT', () => process.exit(1) )

API.server.listen(PORT, () => console.log(`server on: ${PORT}`))