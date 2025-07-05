# Query-2Map

**Team Chirag Semantic Analysis - Full Stack Application**

A comprehensive learning platform with semantic analysis capabilities for educational content.

## 🚀 Project Overview

This repository contains the complete source code for the Query-2Map application, featuring:

- **Backend**: Node.js/Express.js with TypeScript + FastAPI Python server
- **Frontend**: React with Vite and TypeScript
- **Database**: MongoDB Atlas
- **Authentication**: Google OAuth 2.0
- **APIs**: Integration with YouTube, SERP, and Groq APIs

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js and TypeScript
- **FastAPI** Python server for semantic analysis
- **MongoDB** with Mongoose ODM
- **Google OAuth 2.0** for authentication
- **JWT** for session management

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development
- **Material-UI** for components
- **Tailwind CSS** for styling
- **React Router** for navigation

### APIs & Services
- **YouTube API** for video content
- **SERP API** for search results
- **Groq API** for AI processing
- **Google OAuth** for authentication

## 📁 Project Structure

```
query-2map/
├── backend/
│   ├── controllers/         # API route controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── middleware/         # Authentication & error handling
│   ├── queryHandling/      # Semantic analysis logic
│   │   ├── dynamic/        # Dynamic query processing
│   │   ├── static/         # Static graph analysis
│   │   └── nlp/           # Natural language processing
│   ├── server.py          # FastAPI server
│   ├── index.ts           # Express.js server
│   └── package.json       # Node.js dependencies
├── frontend/
│   ├── src/               # React source code
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── vite.config.ts     # Vite configuration
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.10 or higher)
- MongoDB Atlas account
- Google OAuth credentials

### Environment Variables
Create a `.env` file in the backend directory:

```env
# API Keys
SERP_API_KEY=your_serp_api_key
YOUTUBE_API_KEY=your_youtube_api_key
GROQ_API_KEY=your_groq_api_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback

# Database
MONGODB_URI=your_mongodb_connection_string
DATABASE_NAME=cps_learning_system

# Server Configuration
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### Backend Setup

1. **Install Node.js dependencies:**
```bash
cd backend
npm install
```

2. **Install Python dependencies:**
```bash
pip install -r requirements.txt
```

3. **Start the Express.js server:**
```bash
npm run dev
```

4. **Start the FastAPI server:**
```bash
uvicorn server:app --reload --port 8000
```

### Frontend Setup

1. **Install dependencies:**
```bash
cd frontend
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

## 🌐 Running the Application

1. **Backend servers:**
   - Express.js server: `http://localhost:5000`
   - FastAPI server: `http://localhost:8000`

2. **Frontend:**
   - React application: `http://localhost:5173`

## 🔐 Authentication

The application uses Google OAuth 2.0 for user authentication. Users can sign in with their Google accounts to access personalized features.

## 📊 Features

- **Semantic Analysis**: Advanced NLP for educational content
- **Interactive Chat**: AI-powered learning assistant
- **Video Integration**: YouTube video recommendations
- **Graph Analysis**: Knowledge graph for learning paths
- **User Authentication**: Secure Google OAuth login
- **Responsive Design**: Mobile-friendly interface

## 🧪 API Endpoints

### Express.js Endpoints
- `GET /api/auth/google` - Google OAuth login
- `POST /api/chat` - Chat with AI assistant
- `GET /api/user/profile` - User profile data

### FastAPI Endpoints
- `POST /api/chat` - Semantic analysis chat
- `GET /api/health` - Health check

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👥 Team

**Team Chirag Semantic Analysis**
- Advanced semantic analysis for educational content
- Full-stack development with modern technologies
- AI-powered learning recommendations

---

*Built with ❤️ by Team Chirag*
