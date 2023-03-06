# LightForce Exercise - Device API

This project serves as a starting point for the LightForce Exercise Device API. It uses Node.js, Express.js, and TypeScript.

## Description

The Device API is a simple REST endpoint that provides basic CRUD operations for devices. It uses a clean architecture and domain-driven design to ensure a scalable and maintainable codebase.

## Commands

Use the following commands to start the server and run tests:

`npm run start` - Start the server
`npm run test` - Test the server with SuperTest and Mocha

## API

The Device API is developed using Express.js and is organized according to the clean architecture and domain-driven design principles.
The project structure is defined as follows:

- `core` (Provides common functionality for all domains of the application)
  - `entity`
  - `exception`
  - `infra`
  - `middleware`
  - `seed`
  - `types`
- `device` (All codes related to the Device domain)
  - `controller`
  - `entity`
  - `exception`
  - `repository`
  - `routes`
  - `services`
- `index.ts`
- `server.ts`

## Database

The database schema includes six tables and can be found inside the db folder of the project:

- Factory
- Device
- Manufacturer Type
- Device Type
- Device Attribute
- Device Attribute Value

## How to Test

To test the API, use the Swagger UI URL below. Some sample inputs are already defined in the Swagger for your convenience.

Base URL: https://expresssimplepk9eqa-xszg--3000.local-corp.webcontainer.io/api-docs/#/
