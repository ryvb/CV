import express from 'express';
import { Response } from 'express';
import hobbyService from '../services/hobbyService';

import { CvPart } from "../types";

const hobbyRouter = express.Router();

hobbyRouter.get('/', (_req, res: Response<CvPart[]>) => {
    res.send(hobbyService.getHobbyEntries());
});

export default hobbyRouter;