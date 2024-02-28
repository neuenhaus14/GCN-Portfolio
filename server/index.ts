import express, { Request, Response, Router } from "express";
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
const distPath = path.resolve(__dirname, '..', "client", "build");
app.use(express.static(distPath));
app.use(express.json())

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.send({ message: "You're doing great SOS" });
});

// All other GET requests not handled before will return our React app
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', "client", "build", "index.html"));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log("process.env.PORT", process.env.PORT)
});