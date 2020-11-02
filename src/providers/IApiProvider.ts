export interface IHttpResponse {
  status: number;
  data?: any;
}

export interface IApiProvider {
  index(endpoint: string): Promise<IHttpResponse>;
  show(endpoint: string): Promise<IHttpResponse>;
  store(endpoint: string, data: any): Promise<IHttpResponse>;
}

export interface IApiConfigs {
  url: string;
  params?: any;
  token?: string;
  headers?: any;
  data?: any;
}
