import express from 'express';
import personaliaRouter from './routes/personalia';
import languagesRouter from './routes/languages';

const app = express();
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