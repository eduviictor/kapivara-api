import { IApiProvider } from '../../providers/IApiProvider';

export class GetDealsUseCase {
  constructor(private apiProvider: IApiProvider) {}

  async execute(): Promise<Array<any>> {
    const deals = await this.apiProvider.index('/deals');

    return deals.data;
  }
}
