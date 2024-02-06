import express, { Request, Response, Router } from "express";
const path = require('path');

const PORT = process.env.PORT || 3001;


const app = express();

// Have Node serve the files for our built React app
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../client/build')));
  // All other GET requests not handled before will return our React app
}
  //app.use('/', express.static(path.join(__dirname, '../client/build', 'index.html')));
  app.get('/*', (req: Request, res: Response) => {
    const indexPath = path.join(__dirname, '../client/build', 'index.html');
    res.sendFile(indexPath, (err: Error) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).send(err);
      }
    });
  });
  

// app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log("process.env.PORT", process.env.PORT)
});