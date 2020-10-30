export interface IHttpResponse {
  status: number;
  data?: any;
}

export type IApiProvider = {
  index(endpoint: string): Promise<IHttpResponse>;
};

export interface IApiConfigs {
  url: string;
  params: string;
  token: string;
}
