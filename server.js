const express = require('express');
const connectDb = require('./config/db');

const app = express();

// Connect to DB
connectDb();

// Init Middleware - Body Parser
app.use(express.json({ extended: false }));

// Routes
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/user'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
