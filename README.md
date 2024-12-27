# Authentication Using Passport.js

This project demonstrates how to implement authentication in a Node.js application using Passport.js.

## Features

- User registration and login
- Session management
- Protected routes
- Local strategy authentication with Passport.js

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://mongodb.com)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IsmailBinMujeeb/Authentication-Using-Passport.git

2. Navigate to the project directory:

   ```bash
   cd Authentication-Using-Passport


## Configuration 

1. Create a .env file in the root directory and add the following environment variables:

```env
PORT=3000
SESSION_SECRET=your_secret_key
```

2. Ensure your MongoDB server is running and accessible.

## Running The Application 

Start the development server:

```bash
npm start
```

The application will be accessible at http://localhost:3000.

## Project Structure

The project's structure is as follows:

```
Authentication-Using-Passport/
├── bin/
│   └── www
├── config/
│   └── passport.js
├── models/
│   └── user.js
├── public/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── index.js
│   └── users.js
├── utils/
│   └── auth.js
├── views/
│   ├── error.ejs
│   ├── index.ejs
│   ├── layout.ejs
│   └── login.ejs
├── app.js
├── package.json
└── .gitignore
```

