import express, { Request, Response, Router } from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req: Request, res: Response) => {
  res.send({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});