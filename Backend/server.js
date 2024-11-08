// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { Parser } = require('json2csv');
const contactRoutes = require("./routes/contactsRoutes");
const Contact = require('./models/contact');

// Load environment variables
dotenv.config({ path: './config.env' });

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

app.get('/', (req, res) => {
  res.send("<h1>HI</h1>")
});

/// API endpoint to get data and return as CSV
app.get('/api/contact/csv', async (req, res) => {
  try {
    // Fetch contacts from the database
    const contact = await Contact.find().select('_id name email subject message createdAt'); // Ensure 'message' is used instead of 'contact'

    // Check if contacts were found
    if (contact.length === 0) {
      return res.status(404).send('No contacts found');
    }

    // Define fields for CSV header
    const fields = ['_id', 'name', 'email', 'subject', 'message', 'createdAt'];

    // Convert JSON data to CSV format
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(contact);

    // Set response headers to prompt download of CSV
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=contacts.csv'); // Updated filename to reflect contact data
    res.setHeader('Content-Length', Buffer.byteLength(csv)); // Set content length

    // Send CSV file in response
    res.send(csv);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Chatbot endpoint
app.post('/api/chatbot', async (req, res) => {
  const userMessage = req.body.message;

  // Simple rule-based response for demonstration purposes
  let botReply;
  if (userMessage.toLowerCase().includes('hello')) {
    botReply = 'Hello! How can I assist you today?';
  } else if (userMessage.toLowerCase().includes('help')) {
    botReply = 'Sure! Please tell me more about the help you need.';
  } else {
    botReply = 'I am here to help! Please ask me a question.';
  }

  // Send the response back to the client
  res.json({ reply: botReply });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
