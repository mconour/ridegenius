# ParkGenius

ParkGenius is an AI-powered license plate reader system designed to enforce parking regulations. Using JavaScript and machine learning technologies, ParkGenius can detect license plates from surveillance camera feeds in real-time, allowing for automated parking enforcement.

## Features

- **License Plate Detection**: Utilizes machine learning models to detect license plates within surveillance camera feeds.
- **Real-Time Processing**: Processes camera feeds in real-time, enabling immediate enforcement actions.
- **Customizable Enforcement Logic**: Allows for customizable enforcement rules based on recognized license plates.
- **Web-Based Interface**: Accessible via a web browser, making it easy to monitor and manage parking enforcement.

## Technologies Used

- **JavaScript**: Core programming language for implementing the application logic.
- **TensorFlow.js**: Machine learning library for training and deploying license plate detection models.
- **WebRTC**: Technology for accessing real-time camera feeds directly in the browser.
- **Node.js**: JavaScript runtime for server-side processing and hosting.
- **Express.js**: Web application framework for building APIs and handling HTTP requests.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your_username/ParkGenius.git
   ```

2. Install dependencies:

   ```
   cd ParkGenius
   npm install
   ```

3. Start the server:

   ```
   npm start
   ```

4. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Ensure that your surveillance camera is properly configured and accessible.
2. Open the ParkGenius web interface in your browser.
3. Grant permission to access the camera feed.
4. The application will start processing the camera feed and detecting license plates in real-time.
5. Customize enforcement rules and actions as needed.

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests to help improve ParkGenius.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.