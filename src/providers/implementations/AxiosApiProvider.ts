import axios, { AxiosInstance } from 'axios';
import { IApiProvider, IHttpResponse } from '../IApiProvider';

export class AxiosApiProvider implements IApiProvider {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.pipedrive.com/v1',
      params: {
        status: 'all_not_deleted',
        start: '0',
        api_token: process.env.PIPEDRIVE_TOKEN
      }
    });
  }

  async index(endpoint: string): Promise<IHttpResponse> {
    const response = await this.api.get(endpoint);
    return {
      status: response.status,
      data: response.data
    };
  }
}
