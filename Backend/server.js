// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require("./routes/contactsRoutes");

// Load environment variables
dotenv.config({path : './config.env'});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow requests from this specific origin
    methods: ['GET', 'POST'],        // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type']  // Specify allowed headers
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req,res) => {
  res.send("<h1>HI</h1>")
})
// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
