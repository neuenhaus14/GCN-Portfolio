import express, { Request, Response, Router } from "express";
const path = require('path');

const PORT = 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'), function (err: Error) {
    if (err) {
      res.status(500).send(err);
    }
  }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});