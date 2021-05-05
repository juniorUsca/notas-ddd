/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoNotaRepository')} obj.NotaRepository
 */
export default ({ NotaRepository }) => {
  return async ({ descripcion }) => {
    const nuevaNota = {
      content: descripcion,
      important: false,
      date: new Date().toISOString()
    }
    return await NotaRepository.add(nuevaNota)
  }
}
