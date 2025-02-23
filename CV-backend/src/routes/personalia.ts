import express from 'express';

const personaliaRouter = express.Router();

personaliaRouter.get('/', (_req, res) => {
    res.send('Fetching personalia');
});

personaliaRouter.post('/', (_req, res) => {
    res.send('Saving personalia');
});

export default personaliaRouter;