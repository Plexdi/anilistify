const express = require('express');
const cors = require('cors');

const app = express(); // ✅ initialize express
const Port = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// ✅ Test Route
app.post('/', async (req, res) => {
  console.log('Request body:', req.body);
  res.status(200).json({ message: 'Server received your request!' });
});

// ✅ Start the server
app.listen(Port, () => {
  console.log(`🚀 Server running on http://localhost:${Port}`);
});
