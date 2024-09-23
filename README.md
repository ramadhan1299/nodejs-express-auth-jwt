# Node.js Express JWT Authentication

This project is an authentication application built using Node.js, Express, and JSON Web Tokens (JWT).

## About the Project

This project is designed to authenticate Node.js-based backend applications using JWT and interacts with a .json file instead of a database. It demonstrates how to create an authentication API or login feature.

## Installation

Here are the steps to run this project locally:

1. **Clone the GitHub repository:**
    ```bash
   git clone https://github.com/ramadhan1299/nodejs-express-auth-jwt.git

3. **Navigate to the project directory**
    ```bash
    cd nodejs-express-auth-jwt

5. **Install dependencies**
    ```bash
    npm install

7. **Start the application**
    ```bash
    npm start

## API Reference

### Register
    ```bash
    POST /api/register
    ```

    ```bash
    {
        "username" : "ramadhan",
        "password": "password"
    }
    ```

### Login
    ```bash
    POST /api/login
    ```

    ```bash
      {
        "username" : "ramadhan",
        "password": "password"
      }
    ```

### Protected Route (Example)
    ```bash
    GET /api/hello-world
    ```
    
    Authorization header: Authorization: Bearer <token>
