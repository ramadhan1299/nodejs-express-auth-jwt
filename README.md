# Node.js Express JWT Authentication

This project is an authentication application built using Node.js, Express, and JSON Web Tokens (JWT).

## About the Project

This project is designed to authenticate Node.js-based backend applications using JWT and interacts with a .json file instead of a database. It demonstrates how to create an authentication API or login feature.

## Installation

Here are the steps to run this project locally:

1. **Clone the GitHub repository:**

bash
   git clone https://github.com/ramadhan1299/nodejs-express-auth-jwt.git

2. **Navigate to the project directory**
bash
    cd nodejs-express-auth-jwt

3. **Install dependencies**
    
bash
    npm install

4. **Start the application**
bash
    npm start

## API Reference

### Register
bash
  POST /api/register
bash
  {
    "username" : "ramadhan",
    "password": "password"
  }

### Lgin
bash
  POST /api/login
bash
  {
    "username" : "ramadhan",
    "password": "password"
  }
### Protected Route (Example)
bash
  GET /api/hello-world

  Authorization header: Authorization: Bearer <token>
