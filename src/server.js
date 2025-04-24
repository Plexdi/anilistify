const express = require('express');
const cors = require('cors');
import authRouter from './api/index.js'

const app = express(); // ✅ initialize express
const Port = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// ✅ Test Route
app.use('/api', authRouter)
// ✅ Start the server
app.listen(Port, () => {
  console.log(`🚀 Server running on http://localhost:${Port}`);
});
