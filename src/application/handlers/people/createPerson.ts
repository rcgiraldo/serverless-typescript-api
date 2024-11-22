import { APIGatewayEvent, Context } from 'aws-lambda'
import { PeopleRepository } from '../../../infraestructure/repositories/PeopleRepository'
import { PeopleService } from '../../services/PeopleService'

const peopleRepository = new PeopleRepository()
const peopleService = new PeopleService(peopleRepository)

export const createPerson = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const requestBody = JSON.parse(event.body || '{}')

  try {
    const newPerson = await peopleService.createPerson(requestBody)
    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPerson),
    }
  } catch (error) {
    console.error('Error creating person:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error creating person' }),
    }
  }
}
