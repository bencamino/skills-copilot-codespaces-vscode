// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create route
app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});
// Start web server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});