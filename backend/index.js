const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (or in this case, we'll simulate success message)
mongoose.connect('mongodb://mongo:27017/mernapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Hey Raghu! Connection established successfully'))
  .catch(err => console.log(err));

// Simple API route to simulate message
app.get('/api/messages', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
