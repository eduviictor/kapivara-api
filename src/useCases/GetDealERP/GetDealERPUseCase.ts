import { IApiProvider } from '../../providers/IApiProvider';

export class GetDealERPUseCase {
  constructor(private apiProvider: IApiProvider) {}

  async execute(number: string): Promise<any> {
    const deal = await this.apiProvider.show(
      `/pedido/${number}/json&apikey=${process.env.BLING_KEY}`
    );

    return deal.data;
  }
}
