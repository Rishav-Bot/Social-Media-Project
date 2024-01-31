const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const multer = require("multer");
const path = require('path');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log("Database connected");
    })
    .catch(error => {
        console.log(error);
    });

app.use('/images', express.static(path.join(__dirname, "public/images")));

//middlewares
app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(morgan('common'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        return cb(null, req.body.name);
    }
})

const upload  = multer({ storage: storage });

app.post('/api/upload', upload.single("file"), (req, res) => {
    try {
        return res.status(200).json('File uploaded successfully');
    } catch (err) {
        console.log(err);
    }
})

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => {
    console.log('Backend server is running...');
});

