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
  // TODO: validate file type, check size limits.
  // TODO: Create dir 'saved_files' if not exists.
  const incomingFile = req.files.file_upload;
  const uploadPath = `${__dirname}/saved_files/${incomingFile.name}`;
  incomingFile.mv(uploadPath, (err) => {
    if(err){
      return res.status(500).send("Internal Server Error. File could not be saved.");
    }
    res.status(201).send("File Received");
  });

});

// API ROUTES NEEDED
// Delete file
// Rename file

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});