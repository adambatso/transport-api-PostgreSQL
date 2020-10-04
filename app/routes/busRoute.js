import express from 'express';

import { addBusDetails, getAllBuses } from '../controllers/bugController';
import verifyAuth from '../middlewares/verifyAuth';

const router = express.Router();

// buses Routes

router.use('/buses', verifyAuth);
router.post('/buses', addBusDetails);
router.get('/buses', getAllBuses);
export default router;