import express from 'express';

const languagesRouter = express.Router();

languagesRouter.get('/', (_req, res) => {
    res.send('Fetching languages');
});

languagesRouter.post('/', (_req, res) => {
    res.send('Saving languages');
});

export default languagesRouter;