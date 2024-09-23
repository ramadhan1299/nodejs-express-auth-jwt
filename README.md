# Node.js Express Authentication Json Web Token

Proyek ini adalah aplikasi autentikasi yang dibangun menggunakan Node.js, Express, dan JWT.

## Tentang Proyek

Proyek ini dibuat untuk mengautentikasi aplikasi backend berbasis Node.js dengan menggunakan JWT, dan berinteraksi dengan file .json sebagai pengganti database. Aplikasi ini mendemonstrasikan bagaimana cara membuat API Auntentikasi atau fitur Login.

## Instalasi

Berikut adalah langkah-langkah untuk menjalankan proyek ini secara lokal.

1. **Clone repository GitHub:**

bash
   git clone https://github.com/ramadhan1299/nodejs-express-auth-jwt.git

2. **Masuk ke direktori proyek**
bash
    cd nodejs-express-auth-jwt

3. **Instal dependensi**
    
bash
    npm install

4. **Jalankan aplikasi**
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
#### Hello World
bash
  GET /api/products/:id
bash
  Authorization: Bearer Token
