
# Gym Buddy — Workout Tracker App

Gym Buddy is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to securely track and manage their workout routines. Users can create, view, update, and delete workouts while maintaining a personalized and authenticated experience.

---
## Live Demo

Frontend: https://gym-buddy-1.netlify.app  
Backend API: https://gym-buddy-joya.onrender.com

## Overview

This project demonstrates a complete full-stack architecture with authentication, protected APIs, and a responsive user interface. Each user can access only their own workout data, ensuring data privacy and security.

---

## Features

### User Authentication
- Register and log in using email and password  
- Passwords are securely hashed using bcrypt  
- JWT-based authentication with 3-day expiration  
- Persistent login using localStorage  

### Workout Management
- Create workouts with title, load, and repetitions  
- View workouts sorted by latest  
- Update existing workouts  
- Delete workouts with confirmation  
- Fetch a single workout by ID  

### User Experience
- Protected routes for authenticated users  
- Automatic redirects based on login state  
- Form validation with error highlighting  
- Real-time UI updates using React Context  
- Relative timestamps using date-fns  
- Responsive and clean layout  

---

## Tech Stack

### Frontend
- React  
- React Router DOM  
- date-fns  
- CSS  

### Backend
- Node.js  
- Express  
- MongoDB  
- Mongoose  
- JSON Web Token (JWT)  
- bcrypt  
- validator  
- dotenv  

---

## Project Structure

```

## Project Structure


Gym Buddy/
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
│ ├── components/
│ ├── context/
│ ├── hooks/
│ ├── pages/
│ ├── App.js
│ └── index.js
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)  
- npm  
- MongoDB Atlas or local MongoDB  

---

### Backend Setup

```

cd backend
npm install

```

Create a `.env` file:

```

### Backend (.env)
PORT=10000  
MONGO_DB_URL=your_mongodb_connection_string  
JWTSECRET=your_secret_key 
CLIENT_URL=http://localhost:3000

```

Run backend:

```

npm run dev

```

---

### Frontend Setup

```

cd frontend

Create a `.env` file:

```
### Frontend (.env)
REACT_APP_API_URL=http://localhost:4000

```

npm install

Run frontend:
npm start

```

- Frontend: http://localhost:3000  
- Backend: http://localhost:4000  

---

## API Endpoints

### Authentication

- POST `/api/user/signup` — Register a user  
- POST `/api/user/login` — Login user  

---

### Workouts (Protected)

- GET `/api/workouts` — Get all workouts  
- GET `/api/workouts/:id` — Get single workout  
- POST `/api/workouts` — Create workout  
- DELETE `/api/workouts/:id` — Delete workout  
- PATCH `/api/workouts/:id` — Update workout  

All protected routes require:

```

Authorization: Bearer <token>

```

---

## Authentication Flow

1. User signs up or logs in  
2. Server generates JWT token  
3. Token is stored in localStorage  
4. Token is sent with API requests  
5. Backend verifies token  
6. User logs out and token is removed  

---

## Database Schema

### User
- email (String, required, unique)  
- password (String, hashed)  

### Workout
- title (String, required)  
- load (Number, required)  
- reps (Number, required)  
- user_id (String, required)  
- createdAt, updatedAt (timestamps)  

---
## Deployment

- Frontend is deployed on Netlify  
- Backend is deployed on Render  

### Notes
- Frontend uses REACT_APP_API_URL to connect to backend  
- CORS is configured to allow frontend domain  
- Proxy is used only for local development  


## Future Improvements
- Edit workout UI  
- Search and filtering  
- Analytics dashboard  
- Dark mode  
- Better mobile responsiveness  

---

## Author

Built as part of a full-stack MERN learning project.
