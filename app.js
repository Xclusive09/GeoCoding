const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://geocoding:geocoding123@<cluster>.mongodb.net/restapi?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const dataRoutes = require('./routes/dataRoute');
app.use('/data', dataRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
