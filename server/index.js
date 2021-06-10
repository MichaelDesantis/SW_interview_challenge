const fs = require("fs");
const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(fileUpload());

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
  // TODO: Create dir 'saved_files' if not exists.
  // TODO: req.files is undefined, mess with this later. This is a front end challenge and the API is optional.
  res.status(201).send("File Received");
});

// API ROUTES NEEDED
// Upload file
// Delete file
// Rename file


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});