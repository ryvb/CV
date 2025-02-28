import express from 'express';
import { Response } from 'express';
import languageService from '../services/languageService';

import { CvPart } from "../types";

const languagesRouter = express.Router();

languagesRouter.get('/', (_req, res: Response<CvPart[]>) => {
    res.send(languageService.getLanguageEntries());
});

languagesRouter.post('/', (_req, res) => {
    res.send('Saving languages');
});

export default languagesRouter;