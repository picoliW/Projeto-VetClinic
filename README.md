# VetClinic project

Welcome to my project! Follow the instructions below to set it up and run it on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Postman](https://www.postman.com)

## Getting Started

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/picoliW/Projeto-VetClinic.git
   ```
2. Navigate to the project directory:
   ```cmd
   cd Projeto-VetClinic
   ```
3. Install dependencies:
   ```cmd
   npm install (or npm i)
   ```

## Running the application

    npm start

This will run the application server.

# For the unit tests you can run

    npm test

# Testing

##### Open postman and follow the steps below

### Get, Delete

1. Put the url localhost:3000/routeYouWantToTest
2. Select the http method
3. Send
   ![TestGet](https://i.imgur.com/K5lmlcB.png)

### Post, Put

1. Click on body
2. Select JSON
3. Send
   ![TestPostPut](https://i.imgur.com/ILy6an4.png)

# Dados .env

    DB_USER =
    DB_PASS =
    DB_NAME = vetclinic
    DB_HOST =
    DB_PORT =
    DB_DIALECT = sqlite
    DB_STORAGE = database/vetclinic.sqlite
