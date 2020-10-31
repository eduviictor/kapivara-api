import { IApiConfigs } from '../providers/IApiProvider';

export const PipedriveConfigs: IApiConfigs = {
  url: 'https://api.pipedrive.com/v1',
  params: {
    status: 'all_not_deleted',
    start: '0',
    api_token: process.env.PIPEDRIVE_TOKEN
  },
  token: process.env.PIPEDRIVE_TOKEN
};
