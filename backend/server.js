const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
// Routes
const mcqRoutes = require('./routes/mcqRoutes'); // <-- MCQ route
const cqRoutes = require('./routes/cqRoutes'); // <-- CQ route
const authRoutes = require('./routes/authRoutes'); // <-- Auth route
const resultRoutes = require('./routes/resultRoutes'); // <-- Result route

app.use('/api/mcq', mcqRoutes);// <-- use MCQ route
app.use('/api/cq', cqRoutes); // <-- use CQ route
app.use('/api/auth', authRoutes); // <-- use Auth route
app.use('/api/results', resultRoutes); // <-- use Result route



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
