# ImageGram Backend

Welcome to **ImageGram Backend** – a RESTful API built with **Node.js**, **Express**, and **MongoDB** that powers an image-sharing application similar to Instagram. It provides user authentication, secure image uploads to AWS S3, and a curated set of endpoints documented with Swagger.

---

## ✨ Features

- **User Authentication** – Secure registration & login with hashed passwords (bcrypt) and JSON Web Tokens (JWT).
- **Image Uploads** – Store images efficiently on **Amazon S3** using `multer-s3`.
- **Robust Validation** – All request bodies are validated with **Zod** for type-safe schemas.
- **API Documentation** – Interactive Swagger UI available at `/api-docs`.
- **Modular Architecture** – Clean separation of concerns: controllers, services, repositories, validators, and utilities.
- **Environment-Based Config** – Seamless configuration management with **dotenv**.

---

## 📂 Project Structure

```text
├── .env                  # Environment variables (not committed)
├── package.json          # NPM metadata & scripts
├── README.md             # (You are here)
└── src
    ├── index.js          # Entry point - sets up Express server & routes
    ├── config/           # Database & AWS configuration helpers
    ├── controller/       # Route handlers (users, images, auth, etc.)
    ├── middlewares/      # Custom Express middleware (auth, error handling)
    ├── repositories/     # Data-access layer (MongoDB models & queries)
    ├── routers/          # Route definitions & Swagger annotations
    ├── schema/           # Mongoose schemas
    ├── services/         # Business logic (S3 upload, auth service)
    ├── utils/            # Helper functions (logger, response wrapper)
    └── validators/       # Zod schemas for request validation
```

---

## 🚀 Getting Started

### Prerequisites

1. **Node.js >= 18** and **npm** – [Download](https://nodejs.org/)
2. **MongoDB** – Local instance or Atlas cluster
3. **AWS Account** – S3 bucket & IAM user with programmatic access

### Installation

```bash
# Clone repository
$ git clone https://github.com/<your-username>/ImageGram.git
$ cd ImageGram

# Install dependencies
$ npm install
```

### Environment Variables

Create a `.env` file in the root directory. Use the sample below as a guide:

```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/imagegram
JWT_SECRET=super_secret_key
AWS_ACCESS_KEY_ID=YOUR_AWS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET
AWS_REGION=ap-south-1
AWS_S3_BUCKET=imagegram-uploads
```

### Running the Server

```bash
# Start in development mode with auto-reload (nodemon)
$ npm start
```

The API will be accessible at `http://localhost:5000/` (or the port you set). Navigate to `http://localhost:5000/api-docs` for Swagger UI.

---

## 📑 API Overview

| Method | Endpoint                | Description                    |
|--------|-------------------------|--------------------------------|
| POST   | `/auth/register`        | Create a new user              |
| POST   | `/auth/login`           | User login & token issuance    |
| GET    | `/images`               | List all images                |
| POST   | `/images`               | Upload a new image (multipart) |
| PATCH  | `/images/:id`           | Update image metadata          |
| DELETE | `/images/:id`           | Delete an image                |

> For detailed request/response schemas, open Swagger UI.

---

## 🧰 Useful NPM Scripts

| Command        | Description                           |
|----------------|---------------------------------------|
| `npm start`    | Launch server with `nodemon`          |
| `npm test`     | Run test suite (placeholder)          |



---

## 🛠️ Built With

- [Express](https://expressjs.com/) – Fast, unopinionated, minimalist web framework
- [Mongoose](https://mongoosejs.com/) – Elegant MongoDB object modeling
- [AWS SDK](https://aws.amazon.com/sdk-for-node-js/) – Interact with AWS services
- [Multer & Multer-S3](https://github.com/expressjs/multer) – Handling `multipart/form-data` uploads
- [Zod](https://zod.dev/) – Type-safe validation
- [Swagger](https://swagger.io/) – API design & documentation

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m "Add my feature"`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

---

## 🙋‍♀️ Author

Made with ❤️ by **Suman** – feel free to reach out!
