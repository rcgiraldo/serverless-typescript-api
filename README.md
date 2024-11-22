<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v4
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, Inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework - Typescript - API

API desarrollada con Serverless Framework con NodeJs, Typescript, Aws e integrada con la api de Starwars.

## Usage

### Deployment

Para desplegar el proyecto, necesitas ejecutar:

```
npm run build
npm run deploy
```

## Endpoints

### Obtener todos los personajes de DynamoDB

- **Método:** GET
- **URL:** /people
- **Respuesta:** Un array de objetos que representan a los personajes, incluyendo datos de la base de datos.

### Obtener todos los personajes de SWAPI

- **Método:** GET
- **URL:** /starwars/people
- **Respuesta:** Un array de objetos que representan a los personajes traidos desde Swapi.

### Crear un personaje

- **Método:** POST
- **URL:** /people
- **Body:**
  - id: El ID del personaje
  - nombre: Nombre del personaje
  - altura: Altura en cm
  - masa: Peso en kg
  - color_de_cabello: Color del cabello
  - color_de_ojos: Color de los ojos
  - color_de_piel: Color de piel
  - año_de_nacimiento: Año de nacimiento
  - genero: Género
  - planeta_natal: URL del planeta natal en SWAPI
  - peliculas: Array de URLs de las peliculas
  - especies: Array de URLs de las especies
  - vehiculos: Array de URLs de los vehículos
  - naves_estelares: Array de URLs de las naves estelares
- **Respuesta:** Un objeto que representa al personaje, incluyendo datos
