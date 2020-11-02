import { Router } from 'express';
import './configs/env';

import { getDealsController } from './useCases/GetDeals';
import { insertDealERPController } from './useCases/InsertDealERP';
import { saveDealsController } from './useCases/SaveDeals';
import { getDealERPController } from './useCases/GetDealERP';

const router = Router();

router.get('/deals', (req, res) => {
  return getDealsController.handle(req, res);
});

router.post('/bling/order', (req, res) => {
  return insertDealERPController.handle(req, res);
});

router.post('/pipedrive-bling', (req, res) => {
  return saveDealsController.handle(req, res);
});

router.get('/bling/order/:number', (req, res) => {
  return getDealERPController.handle(req, res);
});

export { router };
