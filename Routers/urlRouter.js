import express from 'express';
import { getAllUrls, getStats, redirectUrl, shortenUrl } from '../Controllers/urlController.js';

const router = express.Router();

router.post('/shorten',  shortenUrl);
router.get('/getall', getAllUrls); 
router.get('/stats', getStats);
router.get('/:shortCode', redirectUrl);


    


export default router;
