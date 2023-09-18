import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('¡Hola, Express en TypeScript!')
  console.log('Hola, Express en TypeScript')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
