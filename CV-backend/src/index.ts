import express from 'express';
import cors from 'cors';

import PORT from "./utils/config";

import certificateRouter from './routes/certificates';
import educationRouter from './routes/education';
import hobbiesRouter from './routes/hobbies';
import skillsRouter from './routes/skills';
import workRouter from './routes/work';

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
app.use(express.static('dist'));

app.get('/ping', (_req, res) => {
    console.log('Someone pinged here');
    res.send('pong');
});

app.use('/api/certificates', certificateRouter);
app.use('/api/education', educationRouter);
app.use('/api/hobbies', hobbiesRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/work', workRouter);
app.use('/api/personalia', personaliaRouter);
app.use('/api/languages', languagesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});