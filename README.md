# URL Shortener Backend

This is the backend application for a URL shortener project. It provides APIs for shortening URLs, retrieving statistics, and redirecting to original URLs.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up environment variables by creating a `.env` file and adding necessary configurations (e.g., MongoDB connection string, JWT secret).
5. Start the server using `npm start`.

## Endpoints

- POST `/api/url/shorten`: Shorten a URL.
- GET `/api/url/getall`: Get all URLs.
- GET `/api/url/stats`: Get URL statistics.
- GET `/api/url/:shortCode`: Redirect to the original URL using the short code.

## Controllers

### UserController

- `/register`: Register a new user.
- `/login`: Login with existing user credentials.
- `/forgot-password`: Request password reset link.
- `/reset-password/:token`: Reset user password.

### UrlController

- `shortenUrl`: Shorten a URL.
- `redirectUrl`: Redirect to the original URL.
- `getStats`: Get URL statistics.
- `getAllUrls`: Get all URLs.

## Contributing

Contributions are welcome! Please submit a pull request if you'd like to contribute to this project.

## License

This project is licensed under the MIT License.
