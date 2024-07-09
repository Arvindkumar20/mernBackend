import express from "express";
import cors from "cors";
import connectDb from "./db/db.connect.js";
import 'dotenv/config';
import { router } from "./routes/routes.tasks.js";

const app = express();

// create connection with mongo
connectDb(process.env.DB_URI).then(() => {
    console.log("connected to db");
}).catch(e => console.log(e));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/tasks", router);

app.listen(process.env.PORT, () => {
    console.log("server running at port " + process.env.PORT);
});