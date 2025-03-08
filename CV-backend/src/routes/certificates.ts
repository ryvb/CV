import express from 'express';
import { Response } from 'express';
import certificateService from '../services/certificateService';

import { CvPart } from "../types";

const certificatesRouter = express.Router();

certificatesRouter.get('/', (_req, res: Response<CvPart[]>) => {
    res.send(certificateService.getCertificateEntries());
});

export default certificatesRouter;