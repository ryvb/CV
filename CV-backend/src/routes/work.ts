import express from 'express';
import { Response } from 'express';
import workService from '../services/workService';

import { CvPart } from "../types";

const workRouter = express.Router();

workRouter.get('/', (_req, res: Response<CvPart[]>) => {
    res.send(workService.getWorkEntries());
});

export default workRouter;