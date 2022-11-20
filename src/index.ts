import path from "node:path";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import { DB } from "./database/database";

mongoose
  .connect(DB)
  .then(() => {
    const app = express();

    // Allows you to view files saved in the "uploads" folder
    app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
    // Use in that order!! First allow JSON in requests, then use routes
    app.use(express.json()); // allow JSON in requests
    app.use(router);

    const port = 3001;
    app.listen(port, () => {
      console.log(`Sever is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("Mongo disconnected", err));
