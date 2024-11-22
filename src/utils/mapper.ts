import { IPeople } from '../domain/models/IPeople'

export const mapPeopleAttributes = (person: any): IPeople => {
  return {
    id: person.id || '',
    nombre: person.name,
    altura: person.height,
    masa: person.mass,
    color_de_cabello: person.hair_color,
    color_de_piel: person.skin_color,
    color_de_ojos: person.eye_color,
    año_de_nacimiento: person.birth_year,
    genero: person.gender,
    planeta_natal: person.homeworld,
    peliculas: person.films || [],
    especies: person.species || [],
    vehículos: person.vehicles || [],
    naves_estelares: person.starships || [],
    creado: person.created,
    editado: person.edited,
    url: person.url,
  }
}
