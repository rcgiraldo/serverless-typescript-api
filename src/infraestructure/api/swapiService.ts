import axios from 'axios'
import { mapPersonAttributes } from '../../utils/mapper'

export const fetchAllPeopleFromSWAPI = async (): Promise<any[]> => {
  try {
    const response = await axios.get('https://swapi.py4e.com/api/people/')
    return response.data.results.map(mapPersonAttributes)
  } catch (error) {
    console.error('Error fetching people from SWAPI:', error)
    throw new Error('Error fetching people')
  }
}
