# API Routes Documentation

This document outlines the available API routes for the Uber-like application backend.

## User Routes

### Register a New User

Registers a new user in the system.

- **URL:** `/api/users/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

#### Request Body

| Field              | Type   | Description                          |
| ------------------ | ------ | ------------------------------------ |
| email              | string | User's email address                 |
| fullname           | object | User's full name                     |
| fullname.firstname | string | User's first name (min 3 characters) |
| fullname.lastname  | string | User's last name (optional)          |
| password           | string | User's password (min 6 characters)   |

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword123"
}
```

#### Example Response

```json
// example
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60a1b2c3d4e5f6g7h8i9j0k1",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
// failed example
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---