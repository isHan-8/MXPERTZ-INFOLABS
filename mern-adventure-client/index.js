










// index.js (backend)
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Endpoint to get all stories
app.get('/api/adventure', async (req, res) => {
  try {
    const response = await axios.get('https://mxpertztestapi.onrender.com/api/adventure');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stories' });
  }
});

// Endpoint to get story by id
app.get('/api/adventure/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://mxpertztestapi.onrender.com/api/adventure/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching story' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
