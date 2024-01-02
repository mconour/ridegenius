# TaskifyPro

TaskifyPro is a full-stack task management application that allows users to efficiently organize their tasks, set priorities, and manage deadlines. It's built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, ensuring a robust and responsive user experience.

## Features

- **User Authentication:** Secure user registration and login with JWT (JSON Web Tokens) for data protection.

- **Task Management:** Easily create, update, and delete tasks with options for category, priority, and due dates.

- **Task Filtering:** Filter tasks by category, priority, and due date to quickly find what you need.

- **Intuitive Dashboard:** A user-friendly dashboard for a streamlined task management experience.

- **Responsive Design:** Works seamlessly on various devices, ensuring accessibility on desktops, tablets, and mobile phones.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/mconour/taskify-pro
   cd taskify-pro
   ```

2. Install dependencies:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up MongoDB:

   - Create a MongoDB database and configure the connection in `server/config/db.js`.

4. Configure Environment Variables:

   - Create a `.env` file in the `server` directory and add your environment variables (e.g., database URI, JWT secret).

5. Run the application:

   ```bash
   # Start the server
   cd server
   npm start

   # Start the client (in a separate terminal)
   cd ../client
   npm start
   ```

6. Access the application at `http://localhost:3000` in your web browser.

## Contributing

Contributions are welcome! Please follow our [Contribution Guidelines](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the open-source community and the creators of the MERN stack for their valuable tools and libraries.