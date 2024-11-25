const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all handler to serve the React app for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Frontend server running at http://localhost:${PORT}`);
});
