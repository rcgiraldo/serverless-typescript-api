import { IPerson } from '../models/IPerson'

export interface PeoplePort {
  getAllPeopleFromSWAPI(): Promise<IPerson[]>
}
