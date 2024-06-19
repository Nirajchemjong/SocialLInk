# MERN Template

This is a template for a full-stack application using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This template includes a basic setup for both the backend and frontend, allowing for quick and easy project initialization.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow these steps:

## Clone the repository

git clone https://github.com/yourusername/mern-template.git
cd mern-template

## Install backend dependencies:

cd backend
npm install

## Install frontend dependencies:

cd ../client
npm install

## Usage

## Running the Backend Server

## Ensure you are in the root directory of the project.

Create a .env file in the backend directory with the following content:

env
MONGO_URI=mongodb://username:password@host:port/database
PORT=5000

## Start the backend server:

npm run server

## Running the Frontend Server

Navigate to the client directory.

## Start the frontend server:

<code>npm start</code>

## Running Both Servers Concurrently

From the root directory of the project, you can run both the backend and frontend servers concurrently:

npm run dev
This command uses concurrently to start both servers with one command.

## Project Structure

- `mern-template/`
  - `backend/`
    - `config/`
      - `db.js`
    - `controllers/`
    - `models/`
    - `routes/`
      - `api.js`
    - `server.js`
  - `client/`
    - `public/`
    - `src/`
      - `components/`
        - `ExampleComponent.js`
      - `App.css`
      - `App.js`
      - `index.css`
      - `index.js`
    - `package.json`
  - `.env`
  - `.gitignore`
  - `package.json`
  - `nodemon.json`

## Environment Variables

The following environment variables are used in this project:

MONGO_URI: The connection string for your MongoDB database.
PORT: The port number on which the backend server will run.
Create a .env file in the backend directory with the above variables.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests with any improvements or bug fixes.

## Fork the repository

- Create a new branch (git checkout -b feature/YourFeature)
- Commit your changes (git commit -m 'Add some feature')
- Push to the branch (git push origin feature/YourFeature)
- Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
