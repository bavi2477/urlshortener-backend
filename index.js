import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';
import userRouter from './Routers/userRouter.js';
import urlRouter from './Routers/urlRouter.js';

dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/user', userRouter)
app.use('/api/url', urlRouter)

app.get('/', (req, res) => {
    res.send('API is working');
});


app.listen(port, () => {
    console.log("App is listening in the port - ", port);
})