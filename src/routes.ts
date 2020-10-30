import { Router } from 'express';
import './configs/env';

import { getDealsController } from './useCases/GetDeals';

const router = Router();

router.get('/deals', (req, res) => {
  return getDealsController.handle(req, res);
});

export { router };
