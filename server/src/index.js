require('dotenv').config();
const express = require('express');
const authRoute = require('./routes/authRoutes');
const profileRoute = require('./routes/profileRoute');
const usersRoute = require('./routes/usersRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoute);
app.use('/profile', profileRoute);
app.use('/users', usersRoute);
app.use


app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})