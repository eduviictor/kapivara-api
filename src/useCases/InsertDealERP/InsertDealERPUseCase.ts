import qs from 'querystring';
import { IApiProvider } from '../../providers/IApiProvider';
import { IXmlProvider } from '../../providers/IXmlProvider';
import { IInsertDealERPRequestDTO } from './InsertDealERPDTO';

export class InsertDealERPUseCase {
  constructor(
    private apiProvider: IApiProvider,
    private xmlProvider: IXmlProvider
  ) {}

  async execute(data: IInsertDealERPRequestDTO): Promise<Array<any>> {
    const dataXml = {
      cliente: {
        nome: data.person_name,
        tipoPessoa: 'J',
        email: data.person_id.email[0].value
      },
      itens: [
        {
          item: {
            codigo: data.id,
            descricao: data.title,
            un: 'un',
            qtde: 1,
            vlr_unit: data.value
          }
        }
      ]
    };

    const dealXml = await this.xmlProvider.build(dataXml, 'pedido');

    const dealString = {
      xml: dealXml,
      apikey: process.env.BLING_KEY
    };

    const deal = await this.apiProvider.store(
      '/pedido/json',
      qs.stringify(dealString)
    );

    return deal.data;
  }
}
