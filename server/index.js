const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/api/documents", (req, res, next) => {

  fs.readdir(path.join(__dirname, "saved_files"), (err, fileList) => {
    if (err) {
      next(err);
    }
    res.json(fileList);
  });
});

// TODO: get individual documents
// app.get("/api/document/:id", () => {

// });

app.post("/api/upload", (req, res) => {
  // TODO: validate file type, check size limits, write file to 'saved_files'
  res.status(200).send("File Received");
});

// API ROUTES NEEDED
// Upload file
// Delete file
// Rename file


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});