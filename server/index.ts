import express, { Request, Response, Router } from "express";
const path = require('path');

const PORT = process.env.PORT || 3001;


const app = express();

/// Have Node serve the files for our built React app
if (process.env.NODE_ENV === 'production') {
  // Serve the static files from the React app
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  // Handle GET requests to /api route
  app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

// app.use(express.static(path.resolve(__dirname, '../client/build')));




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log("process.env.PORT", process.env.PORT)
});