const express = require('express');
const app = express();
const PORT = 3000;


// Middleware To Read Requests From Body
app.use(express.json());


// Middleware For Directing Routes
app.use('/todos', require('./routes/todoRouter'));


// Function That Enables Server to Listen for Requests
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
})