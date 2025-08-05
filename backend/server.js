const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so frontend can access the backend
app.use(cors());

// Dummy API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    name: 'Rupasri Narava',
    referralCode: 'rupasri2025',
    donations: 12000
  });
});

// Root route for browser check
app.get('/', (req, res) => {
  res.send('Backend is running. Visit /api/data for dummy intern info.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
