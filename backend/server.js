require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const mcqRoutes = require('./routes/mcqRoutes');
const cqRoutes = require('./routes/cqRoutes');
const authRoutes = require('./routes/authRoutes');
const resultRoutes = require('./routes/resultRoutes');

app.use('/api/mcq', mcqRoutes);
app.use('/api/cq', cqRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/results', resultRoutes);

// // Simple test route
// app.get('/test', (req, res) => res.json({ message: 'Server is working!' }));

// Start server **after MongoDB connects**
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('MongoDB connection error:', err));
