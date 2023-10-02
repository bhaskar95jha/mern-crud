import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv'
import Routes from './routes/route.js'
import cors from 'cors'

const app = express();

dotenv.config()

app.use(cors());
app.use('/', Routes);


const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT : ${PORT}`))