//libraries 
const fs = require('fs');
const path = require('path');
const express = require('express');
const config = require('./config');

//port variable
const PORT = config.PORT;

//declare the variable for my app
const app = express();

//set the path to public directory
app.use(express.json());
const publicURL = path.resolve(__dirname + "/public");

//set my static server
app.use(express.static(publicURL));

//set my static html file
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/views/index.html"))
});

app.get("/start", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/views/content.html"))
});

// Start listening
app.listen(PORT, () => {
  console.log(`see the magic: http://localhost:${PORT}`);
})