const express = require('express');
const app = express();

app.get('/id', async (req, res) => {
  const session = // ... Fetch or create the Checkout Session
  res.json({session_id: session.id});
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});