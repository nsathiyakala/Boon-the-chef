const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
const cors = require('cors');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());
connectDatabase();

const products = require('./routes/product');
const orders = require('./routes/order');

app.use('/boonthechef', products);
app.use('/boonthechef', orders);
// app.use('/boonthechef',wholeProduct)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
