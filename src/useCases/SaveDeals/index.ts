import { BlingConfigs } from '../../configs/bling';
import { PipedriveConfigs } from '../../configs/pipedrive';
import { AxiosApiProvider } from '../../providers/implementations/AxiosApiProvider';
import { XmlProvider } from '../../providers/implementations/XmlProvider';
import { MongoDealRepository } from '../../repositories/implementations/MongoDealRepository';
import { GetDealERPUseCase } from '../GetDealERP/GetDealERPUseCase';
import { GetDealsUseCase } from '../GetDeals/GetDealsUseCase';
import { InsertDealERPUseCase } from '../InsertDealERP/InsertDealERPUseCase';
import { SaveDealsController } from './SaveDealsController';
import { SaveDealsUseCase } from './SaveDealsUseCase';

const mongoDealRepository = new MongoDealRepository();

const axiosApiProviderPipedrive = new AxiosApiProvider(PipedriveConfigs);

const axiosApiProviderBling = new AxiosApiProvider(BlingConfigs);

const xmlProvider = new XmlProvider();

const getDealsUseCase = new GetDealsUseCase(axiosApiProviderPipedrive);

const getDealERPUseCase = new GetDealERPUseCase(axiosApiProviderBling);

const insertDealsERPUseCase = new InsertDealERPUseCase(
  axiosApiProviderBling,
  xmlProvider
);

const saveDealsUseCase = new SaveDealsUseCase(
  mongoDealRepository,
  getDealsUseCase,
  insertDealsERPUseCase,
  getDealERPUseCase
);

const saveDealsController = new SaveDealsController(saveDealsUseCase);

export { saveDealsUseCase, saveDealsController };
