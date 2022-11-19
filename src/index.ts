import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import { DB } from "./database/database";

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(DB)
    .then(() => {
      const app = express();
      const port = 3001;

      app.use(express.json());

      app.use(router);

      app.listen(port, () => {
        console.log(`Sever is running on http://localhost:${port}`);
      });
    })
    .catch((err) => console.log("Mongo disconnected", err));
}
