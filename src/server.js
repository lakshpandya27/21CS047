const express = require('express');
const app = express();

// Sample data for different number types
const numberData = {
  p: [2, 3, 5, 7, 11], // Prime numbers
  f: [0, 1, 1, 2, 3, 5], // Fibonacci sequence
  e: [2, 4, 6, 8, 10], // Even numbers
  r: [7, 2, 5, 8, 4] // Random numbers
};

// API endpoint to calculate average
app.get('/api/average/:numberType', (req, res) => {
  const numberType = req.params.numberType;
  const numbers = numberData[numberType];

  if (!numbers) {
    return res.status(400).json({ error: 'Invalid number type' });
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const avg = sum / numbers.length;

  // Simulating window previous and current state
  const windowPrevState = numbers.slice(0, numbers.length - 1);
  const windowCurrState = numbers.slice(1);

  res.json({ numbers, avg, windowPrevState, windowCurrState });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
