import express from 'express'
import { notes } from '../utils/mockup'
import { crearNota } from '../components/notas/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/notes', (_, response) => {
  response.json(notes)
})

router.post('/api/notes', crearNota)

export default router
