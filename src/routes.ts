import { Router } from 'express';
import './configs/env';

import { getDealsController } from './useCases/GetDeals';
import { insertDealERPController } from './useCases/InsertDealERP';

const router = Router();

router.get('/deals', (req, res) => {
  return getDealsController.handle(req, res);
});

router.post('/bling/order', (req, res) => {
  return insertDealERPController.handle(req, res);
});

export { router };
