const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes');

const app = express();
app.use(express.json());


mongoose.connect("mongodb+srv://admin:abcd1234@cluster0.b1201.mongodb.net/Users?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });