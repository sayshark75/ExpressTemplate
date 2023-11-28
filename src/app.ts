import express, { NextFunction, Request, Response } from "express";
import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/error.middleware";
import { logMiddleware } from "./middlewares/log.middleware";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

// Logger Midleware
app.use(logMiddleware);

// Your Routes here

// Example route to retrieve logs
app.get("/logs", (req: Request, res: Response) => {
  // Read logs from the file and send them in the response
  fs.readFile("requestLogs.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading log file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).send(data);
    }
  });
});

// Error Middleware test
app.get("/home/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (typeof id === "number" && id === 10) {
    res.send("Nothing Happen");
  } else {
    const testError = new Error("Internal Server Error");
    testError.name = "testError";
    next(testError);
  }
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port ${process.env.PORT || 8080} - http://localhost:${process.env.PORT || 8080}/`);
});
