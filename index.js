import express from "express";
import routes from "./routes/index.js";
import { createFilesDir } from "./utils/storage.js";

const app = express();

// middlewares
app.use(express.json());
app.use("/", routes);

const server = app.listen(3000, () => {
  console.log(`[INFO] Dreamroots API is running on port ${server.address().port}`);
  createFilesDir();
});
