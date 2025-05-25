// api/expressApp.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from '../routes/userRoute.js';
import taskRouter from '../routes/taskRoute.js';
import forgotPasswordRouter from '../routes/forgotPassword.js';

dotenv.config();
const app = express();
mongoose.set('strictQuery', true);

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
}).then(() => console.log("DB Connected")).catch(console.error);

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use("/api/forgotPassword", forgotPasswordRouter);

export default app;
