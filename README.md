# Social Network Backend

## Description

Welcome to the Social Network Backend! This application serves as the foundation for a social networking website where users can interact, share their thoughts, connect with friends, and engage with each other's content. Built using MongoDB, Express.js, and Mongoose, this backend enables seamless management of user data, thoughts, friendships, and reactions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Features

- User authentication and signup.
- Posting thoughts for users.
- Establishing and managing friendships.
- Reacting to thoughts with various emotions.
- Secure and efficient data storage using MongoDB.
- Scalable backend architecture with Express.js and Mongoose.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Install dependencies using `npm install`.
4. Set up your MongoDB connection in a `.env` file.
5. Run the application using `npm start`.

## Usage

1. Start the server by running `npm start`.
2. Use tools like Insomnia or Postman to interact with the API endpoints.
3. Create users using the signup endpoint and obtain authentication tokens.
4. Post thoughts using the relevant endpoint, providing the necessary data.
5. Manage friendships by adding friends through appropriate endpoints.
6. React to thoughts using the provided reaction endpoints.

## API Routes

- **POST /api/users/signup**: Sign up a new user.
- **POST /api/thoughts**: Post a new thought.
- **GET /api/thoughts**: Get all thoughts.
- **GET /api/thoughts/:thoughtId**: Get a specific thought by ID.
- **PUT /api/thoughts/:thoughtId**: Update a thought by ID.
- **DELETE /api/thoughts/:thoughtId**: Delete a thought by ID.
- **POST /api/thoughts/:thoughtId/reactions**: React to a thought.
- **POST /api/users/:userId/friends/:friendId**: Add a friend.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend.

## Contributing

Contributions are welcome! If you have improvements or new features to suggest, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request describing your changes.

## Questions

If you have any questions or need assistance, please feel free to reach out:
- GitHub: [YourGitHubUsername](https://github.com/JoshuaVaneps)

## License

This project is licensed under the [MIT License](LICENSE).

