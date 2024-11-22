import { APIGatewayEvent, Context } from 'aws-lambda'

export const main = async (event: APIGatewayEvent, context: Context) => {
  console.log('Event received:', event)

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Bienvenido a nuestro Serverless API con Typescript!',
      }),
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Internal Server Error',
          error: error.message,
        }),
      }
    } else {
      console.error('Unknown error:', error)
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Internal Server Error',
        }),
      }
    }
  }
}
