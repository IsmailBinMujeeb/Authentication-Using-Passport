# Authentication Using Passport.js

This project demonstrates how to implement authentication in a Node.js application using Passport.js.

## Features

- User registration and login
- Session management
- Protected routes
- Local, Google and Github strategy authentication with Passport.js

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

3. Install dependencies:

   ````bash
   npm i


## Configuration 

1. Create a .env file in the root directory and add the following environment variables:

```env
PORT=3000
SESSION_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

2. Ensure your MongoDB server is running and accessible.

## Running The Application 

Start the development server:

```bash
npm start
```

The application will be accessible at http://localhost:3000.

## Project Structure

```
Authentication-Using-Passport/
├── bin/
│   └── www
├── config/
│   └── db.js
├── models/
│   └── user-model.js
├── public/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── githubAuthCallbackRouter.js
│   ├── githubAuthLoginRouter.js
│   ├── googleAuthCallback.js
│   ├── googleAuthLoginRouter.js
│   ├── index.js
│   ├── loginPostRouter.js
│   ├── loginRouter.js
│   ├── logout.js
│   ├── registerPostRouter.js
│   └── registerRouter.js
├── utils/
│   └── isAuthenticated.js
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   └── register.ejs
├── .gitignore
├── app.js
├── package.json
└── README..md
```