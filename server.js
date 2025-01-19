const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const Product = require('./models/productModel');
const productRoute = require('./routes/productRoute');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const errorMiddleware = require('./middleware/errorMiddleware');

const FRONTEND = process.env.FRONTEND;
var cors = require('cors');
var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    // throw new Error('fake error');
    res.send('Hello World');
})

app.get('/blog', (req, res) => {
    res.send('Hello bloggggg');
})

app.use(errorMiddleware);

mongoose.set("strictQuery", false);

mongoose
    .connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server started on port on ${PORT}`);
          })
        console.log('Connected to MongoDBbbbbb');
    }).catch(err => {
        console.log('Error: ', err);
    })