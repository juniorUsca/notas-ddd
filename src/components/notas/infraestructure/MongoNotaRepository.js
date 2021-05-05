import MongoLib from '../../../lib/mongo'

class MongoNotaRepository {
  constructor () {
    this.collection = 'nota'
    this.mongoDB = new MongoLib()
  }

  async add (nota) {
    const id = await this.mongoDB.create(this.collection, nota)
    return { id, ...nota }
  }
}

export default MongoNotaRepository
