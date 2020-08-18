const express = require('express');
const connectDb = require('./config/db');
const app = express();
const path = require('path');
const https = require('https');
const qs = require('querystring');

// Middleware for body parsing
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });

const Order = require('./models/Order');

// Connect to DB
connectDb();

// Init Middleware - Body Parser
app.use(express.json({ extended: false }));

// Routes
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/category'));
app.use('/api', require('./routes/brand'));
app.use('/api', require('./routes/product'));
app.use('/api', require('./routes/pincode'));
app.use('/api', require('./routes/order'));
app.use('/api', require('./routes/payment'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
   // Set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
