const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const GameScore = require('./MajorprojectGames/game');

// Initialize Express app
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/cognitive_retraining', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Serve static files (HTML, CSS, JS) from the current directory
app.use(express.static(__dirname));

// Define MongoDB schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Routes
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body); 
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      // Create new user
      const newUser = new User({
        username: req.body.username, // Retrieve username from request body
        email: req.body.email, // Retrieve email from request body
        password: req.body.password // Retrieve password from request body
      });      
      // Save new user to database
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  //-----------------------------------------------
  app.use(express.static(__dirname));
  const alphaSchema = new mongoose.Schema({
    username: String,
    gameName: String,
    score: Number
  });
  const alphabet = mongoose.model('Alphabet Selection', alphaSchema);
  app.post('/save-score', async (req, res) => {
    try {
        const { username, score } = req.body;
        
        // Assuming the game name is stored in the session or sent from the client
        const gameName = 'Alphabet Selection'; // Replace with actual game name
        
        // Create a new game score document
        const newGameScore = new alphabet({
            username: username,
            gameName: gameName,
            score: score
        });
        
        // Save the game score to the database
        await newGameScore.save();
        
        // Send response
        res.status(201).json({ message: 'Game score saved successfully' });
    } catch (error) {
        console.error('Error saving game score:', error);
        res.status(500).json({ message: 'Failed to save game score' });
    }
});
//-----------------------------------------------
app.use(express.static(__dirname));
const timeSchema = new mongoose.Schema({
  username: String,
  gameName: String,
  score: Number
});
const time = mongoose.model('Alphabet Matching', timeSchema);

app.post('/save-time', async (req, res) => {
  try {
    const { username, score } = req.body;
    
    // Assuming the game name is stored in the session or sent from the client
    const gameName = 'Alphabet Selection'; // Replace with actual game name
    
    // Create a new time document
    const newTime = new time({
      username: username,
      gameName: gameName,
      score: score
    });
    
    // Save the time to the database
    await newTime.save();
    
    // Send response
    res.status(201).json({ message: 'Time saved successfully' });
  } catch (error) {
    console.error('Error saving time:', error);
    res.status(500).json({ message: 'Failed to save time' });
  }
});


//--------------------------------------------------
app.get('/get-score', async (req, res) => {
  try {
    // Fetch the score from the "Alphabet Selection" collection
    const gameScore = await alphabet.findOne({ gameName: 'Alphabet Selection' }).sort({ createdAt: -1 });
    if (!gameScore) {
      return res.status(404).json({ message: 'Score not found' });
    }
    res.status(200).json({ score: gameScore.score });
  } catch (error) {
    console.error('Error fetching score:', error);
    res.status(500).json({ message: 'Failed to fetch score' });
  }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
