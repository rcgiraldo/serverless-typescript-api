import { APIGatewayEvent, Context } from 'aws-lambda'
import { PeopleRepository } from '../../../infraestructure/repositories/PeopleRepository'
import { PeopleService } from '../../services/PeopleService'

const peopleRepository = new PeopleRepository()
const peopleService = new PeopleService(peopleRepository)

export const getAllPeople = async (
  event: APIGatewayEvent,
  context: Context
) => {
  try {
    const people = await peopleService.getAllPeople()
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(people),
    }
  } catch (error) {
    console.error('Error getting people:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching people from database' }),
    }
  }
}
