require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const notesRoutes = require('./routes/NoteRoutes'); 
const app = express();
const PORT = process.env.PORT || 3019;

app.use(express.json());
app.use('/api', notesRoutes);

// Debugging output
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('PORT:', process.env.PORT);

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Successfully connected to MongoDB Atlas Server');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
