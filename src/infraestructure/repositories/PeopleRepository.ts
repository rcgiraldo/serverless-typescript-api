import { DynamoDB } from 'aws-sdk'
import { IPeople } from '../../domain/models/IPeople'

const dynamoDB = new DynamoDB.DocumentClient()
const TABLE_NAME = 'People'

export class PeopleRepository {
  public async getAll(): Promise<IPeople[]> {
    const params = {
      TableName: TABLE_NAME,
    }

    try {
      const result = await dynamoDB.scan(params).promise()
      return result.Items as IPeople[]
    } catch (error) {
      console.error('Error fetching people:', error)
      throw new Error('Error fetching people')
    }
  }
}
