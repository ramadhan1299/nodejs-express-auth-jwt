# Node.js Express JWT Authentication

This project is an authentication application built using Node.js, Express, and JSON Web Tokens (JWT).

## About the Project

This project is designed to authenticate Node.js-based backend applications using JWT and interacts with a .json file instead of a database. It demonstrates how to create an authentication API or login feature.

## Installation

Here are the steps to run this project locally:

1. **Clone the GitHub repository:**
   git clone https://github.com/ramadhan1299/nodejs-express-auth-jwt.git

2. **Navigate to the project directory**
    cd nodejs-express-auth-jwt

3. **Install dependencies**
    npm install

4. **Start the application**
    npm start

## API Reference

### Register
  POST /api/register

  {
    "username" : "ramadhan",
    "password": "password"
  }

### Login
  POST /api/login

  {
    "username" : "ramadhan",
    "password": "password"
  }
### Protected Route (Example)

  GET /api/hello-world

  Authorization header: Authorization: Bearer <token>
