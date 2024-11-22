import { PeopleRepository } from '../../infraestructure/repositories/PeopleRepository'
import { IPeople } from '../../domain/models/IPeople'

export class PeopleService {
  private peopleRepository: PeopleRepository

  constructor(peopleRepository: PeopleRepository) {
    this.peopleRepository = peopleRepository
  }

  public async getAllPeople(): Promise<IPeople[]> {
    return this.peopleRepository.getAll()
  }
}
