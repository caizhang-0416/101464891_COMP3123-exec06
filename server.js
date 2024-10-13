const express = require('express');
const mongoose = require('mongoose');
const notesRoutes = require('./routes/NoteRoutes'); 
const app = express();
const PORT = process.env.PORT || 3014; 

app.use(express.json()); 
app.use('/api', notesRoutes); 

mongoose.connect('mongodb+srv://caizhang:Woshishui1234@cluster0.gfyxn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
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
