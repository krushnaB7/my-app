const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(express.json());
 
// Health check endpoint — used by Docker and load balancers
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});
 
// Main endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello World', version: '1.0.0' });
});
 
// Only start the server if this is the main module
// This allows test files to import the app without starting the server
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
 
module.exports = app;

