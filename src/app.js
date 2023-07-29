const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');

// Create Express app
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://Rahul:myuser@rahul.fack9.mongodb.net/Databaserahul?authSource=admin&replicaSet=atlas-117kuv-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
