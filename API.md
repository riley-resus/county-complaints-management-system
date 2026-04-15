# API Documentation for County Complaints Management System

## Overview
This document provides complete API documentation for the County Complaints Management System.

## Endpoints

### 1. Health Check
- **Endpoint:** `/api/health`
- **Method:** `GET`
- **Description:** Check if the API is running.

#### Example Request
```
GET /api/health
```
#### Example Response
```json
{
  "status": "OK"
}
```

### 2. Submit Complaint
- **Endpoint:** `/api/complaints`
- **Method:** `POST`
- **Description:** Submit a new complaint.

#### Example Request
```
POST /api/complaints
Content-Type: application/json

{
  "title": "Noise Complaint",
  "description": "Loud music at night",
  "location": "123 Main St",
  "submitter": "John Doe"
}
```
#### Example Response
```json
{
  "id": "abcd1234",
  "status": "submitted"
}
```

### 3. Get All Complaints
- **Endpoint:** `/api/complaints`
- **Method:** `GET`
- **Description:** Retrieve all complaints.

#### Example Request
```
GET /api/complaints
```
#### Example Response
```json
[
  {
    "id": "abcd1234",
    "title": "Noise Complaint",
    "status": "submitted"
  },
  {
    "id": "efgh5678",
    "title": "Waste Disposal",
    "status": "under investigation"
  }
]
```

### 4. Get Complaint by ID
- **Endpoint:** `/api/complaints/{id}`
- **Method:** `GET`
- **Description:** Retrieve a specific complaint by its ID.

#### Example Request
```
GET /api/complaints/abcd1234
```
#### Example Response
```json
{
  "id": "abcd1234",
  "title": "Noise Complaint",
  "description": "Loud music at night",
  "status": "submitted"
}
```

### 5. Update Complaint Status
- **Endpoint:** `/api/complaints/{id}`
- **Method:** `PUT`
- **Description:** Update the status of a specific complaint.

#### Example Request
```
PUT /api/complaints/abcd1234
Content-Type: application/json

{
  "status": "resolved"
}
```
#### Example Response
```json
{
  "id": "abcd1234",
  "status": "resolved"
}
```

### 6. Delete Complaint
- **Endpoint:** `/api/complaints/{id}`
- **Method:** `DELETE`
- **Description:** Delete a specific complaint.

#### Example Request
```
DELETE /api/complaints/abcd1234
```
#### Example Response
```json
{
  "message": "Complaint deleted successfully."
}
```

## Conclusion
This documentation outlines the essential APIs available in the County Complaints Management System.