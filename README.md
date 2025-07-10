# DevConnect 🧑‍💻

A full-stack social platform for developers to connect, share projects, and grow together.

---

## 🚀 Features

- 🪪 User authentication (JWT-based)
- 📝 Create and edit developer profiles
- 📂 Share projects with descriptions
- 💬 Comment and connect with others
- 🐳 Dockerized setup for easy deployment
- 🔁 CI/CD with GitHub Actions

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### DevOps
- Docker
- GitHub Actions
- Railway / Render (for deployment)

---

## 📁 Project Structure
```yaml
DevConnect/
├── client/ # React frontend
├── server/ # Node.js backend
├── Dockerfile
├── docker-compose.yml
└── .github/workflows # CI/CD pipeline
```

---

## 🧑‍💻 Local Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/DevConnect.git
cd DevConnect

# Start Docker containers
docker-compose up --build
Access the frontend at http://localhost:3000 and the backend at http://localhost:5000/api.

📦 Deployment
This app is designed to be deployed on Render or Railway.

🙌 Contributing
Pull requests are welcome. For major changes, please open an issue first.
