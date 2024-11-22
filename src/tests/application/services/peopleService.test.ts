import { PeopleService } from '../../../application/services/PeopleService'
import { PeopleRepository } from '../../../infraestructure/repositories/PeopleRepository'
import { IPerson } from '../../../domain/models/IPerson'

jest.mock('../../../infraestructure/repositories/PeopleRepository')

describe('PeopleService', () => {
  let peopleService: PeopleService
  let mockedPeopleRepository: jest.Mocked<PeopleRepository>

  beforeEach(() => {
    mockedPeopleRepository =
      new PeopleRepository() as jest.Mocked<PeopleRepository>

    peopleService = new PeopleService(mockedPeopleRepository)
  })

  it('Debería de devolver todas las personas de la BD', async () => {
    // Datos de ejemplo de la BD
    const examplePeople: IPerson[] = [
      {
        planeta_natal: 'http://swapi.dev/api/planets/1/',
        nombre: 'Luke Skywalker 4',
        masa: '77',
        color_de_ojos: 'azul',
        color_de_piel: 'claro',
        año_de_nacimiento: '19BBY',
        altura: '172',
        url: 'http://swapi.dev/api/people/1/',
        peliculas: [
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/2/',
        ],
        naves_estelares: ['http://swapi.dev/api/starships/12/'],
        vehículos: ['http://swapi.dev/api/vehicles/14/'],
        editado: '2014-12-20T21:17:56.891000Z',
        especies: [],
        creado: '2014-12-09T13:50:51.644000Z',
        id: '7a46eee6-f3e0-47a1-b61d-e805d80c0a83',
        color_de_cabello: 'rubio',
        genero: 'masculino',
      },
      {
        planeta_natal: 'http://swapi.dev/api/planets/1/',
        nombre: 'Luke Skywalker 2',
        masa: '77',
        color_de_ojos: 'azul',
        color_de_piel: 'claro',
        año_de_nacimiento: '19BBY',
        altura: '172',
        url: 'http://swapi.dev/api/people/1/',
        peliculas: [
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/2/',
        ],
        naves_estelares: ['http://swapi.dev/api/starships/12/'],
        vehículos: ['http://swapi.dev/api/vehicles/14/'],
        editado: '2014-12-20T21:17:56.891000Z',
        especies: [],
        creado: '2014-12-09T13:50:51.644000Z',
        id: '12345',
        color_de_cabello: 'rubio',
        genero: 'masculino',
      },
      {
        planeta_natal: 'http://swapi.dev/api/planets/1/',
        nombre: 'Luke Skywalker 3',
        masa: '77',
        color_de_ojos: 'azul',
        color_de_piel: 'claro',
        año_de_nacimiento: '19BBY',
        altura: '172',
        url: 'http://swapi.dev/api/people/1/',
        peliculas: [
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/2/',
        ],
        naves_estelares: ['http://swapi.dev/api/starships/12/'],
        vehículos: ['http://swapi.dev/api/vehicles/14/'],
        editado: '2014-12-20T21:17:56.891000Z',
        especies: [],
        creado: '2014-12-09T13:50:51.644000Z',
        id: 'c3d547de-1b08-4b83-bd82-8f6539749238',
        color_de_cabello: 'rubio',
        genero: 'masculino',
      },
    ]

    mockedPeopleRepository.getAll.mockResolvedValue(examplePeople)

    const people = await peopleService.getAllPeople()

    expect(mockedPeopleRepository.getAll).toHaveBeenCalledTimes(1)

    expect(people).toEqual(examplePeople)
  })

  it('Deberia de insertar una persona en la BD correctamente', async () => {
    const objPerson: IPerson = {
      id: '',
      nombre: 'Demo Skywalker',
      altura: '172',
      masa: '77',
      color_de_cabello: 'rubio fake',
      color_de_piel: 'claro',
      color_de_ojos: 'azul',
      año_de_nacimiento: '19BBY',
      genero: 'masculino',
      planeta_natal: 'http://swapi.dev/api/planets/1/',
      peliculas: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
      ],
      especies: [],
      vehículos: ['http://swapi.dev/api/vehicles/14/'],
      naves_estelares: ['http://swapi.dev/api/starships/12/'],
      creado: '2014-12-09T13:50:51.644000Z',
      editado: '2014-12-20T21:17:56.891000Z',
      url: 'http://swapi.dev/api/people/1/',
    }

    mockedPeopleRepository.create.mockResolvedValue(objPerson)

    const newPerson = await peopleService.createPerson(objPerson)
    expect(newPerson).toEqual(objPerson)
    expect(mockedPeopleRepository.create).toHaveBeenCalledWith(objPerson)
  })
})
