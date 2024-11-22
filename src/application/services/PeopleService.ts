import { PeopleRepository } from '../../infraestructure/repositories/PeopleRepository'
import { IPerson } from '../../domain/models/IPerson'

export class PeopleService {
  private peopleRepository: PeopleRepository

  constructor(peopleRepository: PeopleRepository) {
    this.peopleRepository = peopleRepository
  }

  public async getAllPeople(): Promise<IPerson[]> {
    return this.peopleRepository.getAll()
  }

  public async createPerson(person: IPerson): Promise<IPerson> {
    return this.peopleRepository.create(person)
  }
}
