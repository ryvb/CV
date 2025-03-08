import express from 'express';
import { Response } from 'express';
import educationService from '../services/educationService';

import { CvPart } from "../types";

const educationRouter = express.Router();

educationRouter.get('/', (_req, res: Response<CvPart[]>) => {
    res.send(educationService.getEducationEntries());
});

export default educationRouter;