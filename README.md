# JWT-Based-Authentication-

A secure Node.js REST API implementing JWT (JSON Web Token) based authentication.

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- Express validation
- Password hashing with bcrypt
- CORS enabled
- Environment variables support

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
JWT_SECRET=your_jwt_secret_key_here
PORT=3000
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication Routes

#### Register a new user
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Protected Routes

#### Get user profile
```http
GET /api/protected/profile
Authorization: Bearer <your_jwt_token>
```

## Authentication

Protected routes require a valid JWT token in the Authorization header:
```http
Authorization: Bearer <your_jwt_token>
```

## Validation

- Email must be a valid email address
- Password must be at least 6 characters long

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `500` - Server Error

## Security Features

- Password hashing using bcrypt
- JWT token authentication
- Input validation
- CORS protection
- Environment variables for sensitive data

## Project Structure

```
├── controllers/
│   └── authController.js
├── middleware/
│   └── auth.js
├── models/
│   └── User.js
├── routes/
│   ├── auth.js
│   └── protected.js
├── .env
├── index.js
├── package.json
└── README.md
```

## Development

```bash
npm run dev
```

This will start the server with nodemon for development.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
