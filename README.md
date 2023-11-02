# bug-app-node

## Description

This project is built using Node.js and Express, with a PostgreSQL database managed by Knex.js. It implements JWT for authentication and authorization.

## Installation

To run this project locally, you need to have Node.js and PostgreSQL installed on your system. After cloning the repository, follow these steps:

npm install

npx knex migrate:latest --knexfile ./knexfile.js

npm run start
