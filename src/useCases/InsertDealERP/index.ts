import { BlingConfigs } from '../../configs/bling';
import { AxiosApiProvider } from '../../providers/implementations/AxiosApiProvider';
import { XmlProvider } from '../../providers/implementations/XmlProvider';
import { InsertDealERPController } from './InsertDealERPController';
import { InsertDealERPUseCase } from './InsertDealERPUseCase';

const axiosApiProvider = new AxiosApiProvider(BlingConfigs);
const xmlProvider = new XmlProvider();

const insertDealERP = new InsertDealERPUseCase(axiosApiProvider, xmlProvider);

const insertDealERPController = new InsertDealERPController(insertDealERP);

export { insertDealERP, insertDealERPController };
