import express from 'express';
import { Response } from 'express';
import skillsService from '../services/skillService';

import { CvPart } from "../types";

const skillRouter = express.Router();

skillRouter.get('/', (_req, res: Response<CvPart[]>) => {
    res.send(skillsService.getSkillEntries());
});

export default skillRouter;