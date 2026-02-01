import express from "express";
import "dotenv/config";
import cors from "cors";

import connectDb from "../configs/db.js";
import userRouter from "../routes/userRoutes.js";
import ownerRouter from "../routes/ownerRoutes.js";
import bookingRouter from "../routes/bookingRoutes.js";

const app = express();

// connect database
await connectDb();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ success: true, message: "API running on Vercel 🚀" });
});

app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

export default app;
