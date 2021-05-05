// const express = require('express')
import express from 'express'
import apiAgenda from './routes/agenda'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
app.use(morgan('common'))
app.use(helmet())

app.use(express.json())

app.use('/', apiAgenda)

app.use((req, res, next) => {
  res.status(404).send('<h1 style="color: red;">Error 404</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
