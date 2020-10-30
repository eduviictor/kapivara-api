import { AxiosApiProvider } from '../../providers/implementations/AxiosApiProvider';
import { GetDealsController } from './GetDealsController';
import { GetDealsUseCase } from './GetDealsUseCase';

const axiosApiProvider = new AxiosApiProvider();

const getDealsUseCase = new GetDealsUseCase(axiosApiProvider);

const getDealsController = new GetDealsController(getDealsUseCase);

export { getDealsUseCase, getDealsController };
