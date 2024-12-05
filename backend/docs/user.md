# API Routes Documentation

This document outlines the available API routes for the Uber-like application backend.

## User Routes

### 1. Register a New User

**Registers a new user in the system.**

- **URL:** `/api/users/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

#### Request Body

| Field                | Type   | Description                          |
| -------------------- | ------ | ------------------------------------ |
| `email`              | string | User's email address                 |
| `fullname`           | object | User's full name                     |
| `fullname.firstname` | string | User's first name (min 3 characters) |
| `fullname.lastname`  | string | User's last name (optional)          |
| `password`           | string | User's password (min 6 characters)   |

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

**Success:**
```json
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
```

**Failure:**
```json
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

### 2. User Login

**Authenticates a user and returns a token.**

- **URL:** `/api/users/login`
- **Method:** `POST`
- **Content-Type:** `application/json`

#### Request Body

| Field      | Type   | Description          |
| ---------- | ------ | -------------------- |
| `email`    | string | User's email address |
| `password` | string | User's password      |

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

#### Example Response

**Success:**
```json
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
```

**Error Responses:**

1. **Invalid Input**  
   ```json
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

2. **Invalid Credentials**  
   **Code:** 401 UNAUTHORIZED  
   ```json
   {
     "message": "Invalid credentials"
   }
   ```

3. **Authentication Failure**  
   **Code:** 500 INTERNAL SERVER ERROR  
   ```json
   {
     "message": "Failed to authenticate user"
   }
   ```

---

### 3. Get User Profile

**Retrieves the profile information of the authenticated user.**

- **URL:** `/api/users/profile`
- **Method:** `GET`
- **Authentication:** Required (JWT token in Authorization header or cookie)

#### Headers

| Name          | Value            | Description                                         |
| ------------- | ---------------- | --------------------------------------------------- |
| Authorization | Bearer `[token]` | JWT token received upon login (if not using cookie) |

#### Example Response

**Success:**
```json
{
  "user": {
    "_id": "60a1b2c3d4e5f6g7h8i9j0k1",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Error Responses:**

1. **Unauthorized Access**  
   **Code:** 401 UNAUTHORIZED  
   ```json
   {
     "message": "You are not authorized"
   }
   ```

2. **User Not Found**  
   **Code:** 404 NOT FOUND  
   ```json
   {
     "message": "User not found"
   }
   ```

---

### 4. User Logout

**Logs out the currently authenticated user by invalidating their token.**

- **URL:** `/api/users/logout`
- **Method:** `GET`
- **Authentication:** Required (JWT token in Authorization header or cookie)

#### Headers

| Name          | Value            | Description                                         |
| ------------- | ---------------- | --------------------------------------------------- |
| Authorization | Bearer `[token]` | JWT token received upon login (if not using cookie) |

#### Example Response

**Success:**
```json
{
  "message": "Logged out successfully"
}
```

**Error Responses:**

1. **Unauthorized Access**  
   **Code:** 401 UNAUTHORIZED  
   ```json
   {
     "message": "You are not authorized"
   }
   ```

2. **Logout Failure**  
   **Code:** 500 INTERNAL SERVER ERROR  
   ```json
   {
     "message": "Failed to logout"
   }
   ```

---

## Common Error Responses

These error responses may apply to multiple endpoints:

1. **Server Error**  
   **Code:** 500 INTERNAL SERVER ERROR  
   ```json
   {
     "message": "Internal server error"
   }
   ```

2. **Invalid Token**  
   **Code:** 401 UNAUTHORIZED  
   ```json
   {
     "message": "Invalid token"
   }
   ```

3. **Blacklisted Token**  
   **Code:** 401 UNAUTHORIZED  
   ```json
   {
     "message": "Token has been blacklisted"
   }
   ```
