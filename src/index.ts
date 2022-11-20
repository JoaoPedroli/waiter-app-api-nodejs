import path from "node:path";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import { DB } from "./database/database";

mongoose
  .connect(DB)
  .then(() => {
    const app = express();

    app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
    app.use(express.json());
    app.use(router);

    const port = 3001;
    app.listen(port, () => {
      console.log(`Sever is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("Mongo disconnected", err));
