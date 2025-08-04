const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock user data
const userData = {
  name: "John Doe",
  referralCode: "johndoe2025",
  totalDonations: 1250,
  rewards: [
    { id: 1, name: "Bronze Badge", unlocked: true },
    { id: 2, name: "Silver Badge", unlocked: true },
    { id: 3, name: "Gold Badge", unlocked: false },
    { id: 4, name: "Platinum Badge", unlocked: false }
  ]
};

// API endpoint to get user data
app.get('/api/user', (req, res) => {
  res.json(userData);
});
const PORT = process.env.PORT || 5000; // Critical for hosting platforms

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});