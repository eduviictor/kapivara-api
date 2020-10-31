import axios, { AxiosInstance } from 'axios';
import { IApiConfigs, IApiProvider, IHttpResponse } from '../IApiProvider';

export class AxiosApiProvider implements IApiProvider {
  private api: AxiosInstance;

  constructor(private configs: IApiConfigs) {
    this.api = axios.create({
      baseURL: this.configs.url,
      params: this.configs.params,
      headers: this.configs.headers
    });
  }

  async index(endpoint: string): Promise<IHttpResponse> {
    const response = await this.api.get(endpoint);
    return {
      status: response.status,
      data: response.data
    };
  }

  async store(endpoint: string, data: any): Promise<IHttpResponse> {
    const response = await this.api.post(endpoint, data);
    return {
      status: response.status,
      data: response.data
    };
  }
}
