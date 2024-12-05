# Captain API Documentation

This document outlines the available API routes for captain-related operations in the Uber-like application backend.

## Captain Routes

### Register a New Captain

Registers a new captain in the system.

- **URL:** `/api/captains/register`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Authentication:** Not required

#### Request Body

| Field                    | Type   | Description                             |
| ------------------------ | ------ | --------------------------------------- |
| email                    | string | Captain's email address                 |
| fullname                 | object | Captain's full name                     |
| fullname.firstname       | string | Captain's first name (min 3 characters) |
| fullname.lastname        | string | Captain's last name (optional)          |
| password                 | string | Captain's password (min 6 characters)   |
| vehicleInfo              | object | Captain's vehicle information           |
| vehicleInfo.make         | string | Vehicle make                            |
| vehicleInfo.model        | string | Vehicle model                           |
| vehicleInfo.year         | number | Vehicle year                            |
| vehicleInfo.color        | string | Vehicle color                           |
| vehicleInfo.licensePlate | string | Vehicle license plate number            |

#### Example Request

```json
{
  "email": "john.driver@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Driver"
  },
  "password": "securepassword123",
  "vehicleInfo": {
    "make": "Toyota",
    "model": "Camry",
    "year": 2020,
    "color": "Silver",
    "licensePlate": "ABC123"
  }
}

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60a1b2c3d4e5f6g7h8i9j0k1",
    "fullName": {
      "firstName": "John",
      "lastName": "Driver"
    },
    "email": "john.driver@example.com",
    "vehicleInfo": {
      "make": "Toyota",
      "model": "Camry",
      "year": 2020,
      "color": "Silver",
      "licensePlate": "ABC123"
    }
  }
}