import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("process.env.MONGODB_URL || 'mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
// <<<<<<< HEAD
app.use("/api/orders", orderRouter);
// =======
app.get("/api/orders", orderRouter);
// >>>>>>> f9f55cb5e904d4e57df387f137ccfe54c7202746
app.get("/", (req, res) => {
  res.send("Server is ready");
});

// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message });
// });
// app.use((err, req, res, next) => {
app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
