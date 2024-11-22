import { DynamoDB } from 'aws-sdk'
import { IPerson } from '../../domain/models/IPerson'

const dynamoDB = new DynamoDB.DocumentClient()
const TABLE_NAME = 'People'

export class PeopleRepository {
  public async getAll(): Promise<IPerson[]> {
    const params = {
      TableName: TABLE_NAME,
    }

    try {
      const result = await dynamoDB.scan(params).promise()
      return result.Items as IPerson[]
    } catch (error) {
      console.error('Error fetching people:', error)
      throw new Error('Error fetching people')
    }
  }

  public async create(person: IPerson): Promise<IPerson> {
    const params = {
      TableName: TABLE_NAME,
      Item: person,
    }

    try {
      await dynamoDB.put(params).promise()
      return person
    } catch (error) {
      console.error('Error creating person:', error)
      throw new Error('Error creating person')
    }
  }
}
