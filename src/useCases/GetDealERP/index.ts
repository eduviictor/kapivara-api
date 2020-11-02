import { BlingConfigs } from '../../configs/bling';
import { AxiosApiProvider } from '../../providers/implementations/AxiosApiProvider';
import { GetDealERPController } from './GetDealERPController';
import { GetDealERPUseCase } from './GetDealERPUseCase';

const axiosApiProvider = new AxiosApiProvider(BlingConfigs);

const getDealERPUseCase = new GetDealERPUseCase(axiosApiProvider);

const getDealERPController = new GetDealERPController(getDealERPUseCase);

export { getDealERPUseCase, getDealERPController };
