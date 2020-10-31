import { IApiConfigs } from '../providers/IApiProvider';

export const BlingConfigs: IApiConfigs = {
  url: 'https://bling.com.br/Api/v2',
  token: process.env.BLING_KEY,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};
