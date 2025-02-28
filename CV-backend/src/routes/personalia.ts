import express from 'express';
import { Response } from 'express';
import personaliaService from '../services/personaliaService';

import { CvPart } from "../types";

const personaliaRouter = express.Router();

personaliaRouter.get('/', (_req, res: Response<CvPart[]>) => {
    res.send(personaliaService.getPersonaliaEntries());
});

personaliaRouter.post('/', (_req, res) => {
    res.send('Saving personalia');
});

export default personaliaRouter;