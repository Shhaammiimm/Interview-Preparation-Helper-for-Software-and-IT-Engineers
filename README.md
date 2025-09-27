# 🎯 Interview Preparation Helper for Software and IT students

A comprehensive web application for managing and taking Multiple Choice Questions (MCQ) and Conceptual Questions (CQ) quizzes. Built with React frontend and Node.js/Express backend, featuring user authentication, quiz management, and job portal integration.

## ✨ Features

### 🧠 Quiz Management
- **Multiple Choice Questions (MCQ)**: Interactive quiz system with multiple choice questions
- **Conceptual Questions (CQ)**: Open-ended questions for deeper understanding
- **Category-based Quizzes**: Support for DSA, OOP, DBMS, OS, and Networking categories
- **Customizable Quiz Length**: Choose 5, 10, 20, or 30 questions per category
- **Timer-based Quizzes**: Automatic submission with countdown timer
- **Real-time Results**: Instant scoring and performance analysis

### 👤 User Management
- **User Authentication**: Secure login/signup system with JWT tokens
- **Password Security**: Bcrypt hashing for secure password storage
- **User Profiles**: Personalized user dashboard and progress tracking
- **Protected Routes**: Secure access to user-specific features

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-friendly interface
- **Interactive Components**: Smooth animations and transitions
- **Search Functionality**: Quick access to specific content
- **Chatbot Integration**: AI-powered assistance for user queries

### 💼 Job Portal Integration
- **Company Listings**: Curated list of top tech companies
- **Career Opportunities**: Direct links to company career pages
- **Job Search**: Easy navigation to various job opportunities

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **Recharts** - Data visualization
- **CSS3** - Styling and animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mcq_management.git
   cd mcq_management
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up MongoDB**
   - Make sure MongoDB is running on your local machine
   - The application connects to `mongodb://127.0.0.1:27017/mcq_quiz`

5. **Seed the Database (Optional)**
   ```bash
   cd ../backend
   node seedmcq.js  # Seed MCQ questions
   node seedcq.js   # Seed CQ questions
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:5000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   # Application runs on http://localhost:3000
   ```

3. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`
   - The backend API will be available at `http://localhost:5000`

## 📁 Project Structure

```
mcq_management/
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT authentication middleware
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── mcq.js                # MCQ schema
│   │   ├── CQ.js                 # CQ schema
│   │   └── Result.js             # Result schema
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication routes
│   │   ├── mcqRoutes.js          # MCQ management routes
│   │   ├── cqRoutes.js           # CQ management routes
│   │   └── resultRoutes.js       # Result management routes
│   ├── seedmcq.js               # MCQ data seeder
│   ├── seedcq.js                # CQ data seeder
│   ├── server.js                # Main server file
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js           # Landing page
│   │   │   ├── Quiz.js           # Quiz interface
│   │   │   ├── Result.js         # Results display
│   │   │   ├── Login.js          # Login form
│   │   │   ├── Signup.js         # Registration form
│   │   │   ├── Profile.js        # User profile
│   │   │   ├── FindJob.js        # Job portal
│   │   │   ├── CQPage.js         # Conceptual questions
│   │   │   ├── ChatbotBubble.js  # AI chatbot
│   │   │   └── ...               # Other components
│   │   ├── App.js                # Main app component
│   │   └── index.js              # App entry point
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Password reset

### MCQ Management
- `GET /api/mcq` - Get all MCQ questions
- `POST /api/mcq` - Create new MCQ question
- `POST /api/mcq/get-multi-quiz` - Get quiz questions by categories
- `PUT /api/mcq/:id` - Update MCQ question
- `DELETE /api/mcq/:id` - Delete MCQ question

### CQ Management
- `GET /api/cq` - Get all CQ questions
- `POST /api/cq` - Create new CQ question
- `GET /api/cq/:category` - Get CQ questions by category
- `PUT /api/cq/:id` - Update CQ question
- `DELETE /api/cq/:id` - Delete CQ question

### Results
- `GET /api/results` - Get user results
- `POST /api/results` - Save quiz result
- `GET /api/results/:userId` - Get results by user

## 🎮 Usage

### Taking a Quiz
1. **Select Categories**: Choose from DSA, OOP, DBMS, OS, or Networking
2. **Set Question Count**: Select 5, 10, 20, or 30 questions per category
3. **Start Quiz**: Click "Start Quiz" to begin
4. **Answer Questions**: Select your answers within the time limit
5. **View Results**: Get instant feedback and performance analysis

### User Account
1. **Register**: Create a new account with email and password
2. **Login**: Access your personalized dashboard
3. **Profile**: View your quiz history and performance
4. **Progress Tracking**: Monitor your improvement over time

### Job Portal
1. **Browse Companies**: Explore curated list of tech companies
2. **Career Links**: Access direct links to company career pages
3. **Job Search**: Find opportunities that match your skills

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt encryption for password security
- **Protected Routes**: Middleware protection for sensitive endpoints
- **CORS Configuration**: Cross-origin request security
- **Input Validation**: Server-side validation for all inputs

## 🤖 AI Integration

- **Chatbot Support**: Integrated AI chatbot for user assistance
- **Smart Responses**: Context-aware help and guidance
- **24/7 Availability**: Always-available support system

## 🚀 Deployment

### Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mcq_quiz
JWT_SECRET=your_jwt_secret_key
```

### Production Build
```bash
# Build frontend for production
cd frontend
npm run build

# Start production server
cd ../backend
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React community for excellent documentation
- MongoDB for robust database solutions
- All contributors who helped improve this project

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us through the integrated chatbot
- Reach out via email

---

⭐ **Star this repository if you found it helpful!**
