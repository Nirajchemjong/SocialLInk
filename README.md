# SocialLink

SocialLink is a platform that allows users to create a single link that directs to a personalized landing page containing links to their various social media profiles, websites, or other online content. This is especially useful on platforms like Instagram or Twitter, where you can only have one bio link.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication and Profile Management**:

  - Sign up, login, logout, and password reset.
  - Profile creation and management (name, bio, profile picture).

- **Link Management**:

  - Add, edit, and delete links.
  - Select from a list of popular social media platforms and websites.
  - Customizable titles, URLs, and descriptions.
  - Reorder links through a drag-and-drop interface (optional).

- **Profile Sharing**:

  - Unique URL for each user (e.g., `sociallink.com/username`).
  - Public profiles viewable by anyone with the URL.
  - Generate a short link for easy sharing.

- **Customizable Themes**:
  - Users can choose from various themes or customize the appearance of their profile page.

## Installation

To get started with this project, follow these steps:

### Clone the repository

git clone https://github.com/yourusername/sociallink.git
cd sociallink

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
