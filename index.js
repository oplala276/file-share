import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';


const app = express();
dotenv.config();
app.use(cors());
app.use('/', router);


const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
DBConnection(username, password);

app.listen(PORT, () => console.log(`Server is running at port no ${PORT}`));
