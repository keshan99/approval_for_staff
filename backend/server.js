require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const examRoutes = require('./routes/ReqExam');
const subjectRoutes = require('./routes/Subject');
const userRoutes = require('./routes/user');
const valRoutes = require('./routes/val');

// express app
const app = express();

// middleware
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

// routes
app.use('/api/exam', examRoutes);
app.use('/api/subject', subjectRoutes);
app.use('/api/user', userRoutes);
app.use('/api/val', valRoutes);


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT);
    })
  })
  .catch((err) => {
    console.log(err);
  }) 

  module.exports = app;