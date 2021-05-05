import MongoNotaRepository from './infraestructure/MongoNotaRepository'
import CrearNota from './application/crearNota'

const NotaRepository = new MongoNotaRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const crearNota = async (req, res, next) => {
  try {
    const query = CrearNota({ NotaRepository })
    const nota = await query(req.body)
    res.status(201).json({
      data: nota,
      message: 'created'
    })
  } catch (e) {
    next(e)
  }
}
