// Create web server
// Create a web server using the express module
const express = require('express');
const app = express();
// Create a route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to my web server!');
});
// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});