import express from 'express';
import cors from 'cors';


import personaliaRouter from './routes/personalia';
import languagesRouter from './routes/languages';

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: 'GET',
    credentials: true,
    optionSuccessStatus: 204,
};


app.use(cors(corsOptions));
app.use(express.json());


const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('Someone pinged here');
    res.send('pong');
});

app.use('/api/personalia', personaliaRouter);
app.use('/api/languages', languagesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});