const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// TODO: get actual documents
app.get("/api/documents", (req, res) => {
  res.json([
    {fileName: "first.pdf"},
    {fileName: "second.pdf"},
    {fileName: "third.pdf"},
    {fileName: "fourth.pdf"},
    {fileName: "fifth.pdf"},
    {fileName: "sixth.pdf"}
  ]);
});

// TODO: get individual documents
// app.get("/api/document/:id", () => {

// });

// API ROUTES NEEDED
// Upload file (documents and images)
// Delete file
// Rename file


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});