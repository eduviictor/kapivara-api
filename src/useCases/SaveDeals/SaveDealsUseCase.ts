import { IDeal } from '../../entities/IDeal';
import { IDealRepository } from '../../repositories/IDealRepository';

export type IEmail = {
  value: string;
};

export interface IPersonId {
  email: Array<IEmail>;
}

export interface IInsertDeal {
  person_name: string;
  person_id: IPersonId;
  id: number;
  title: string;
  value: number;
}

export interface IUserId {
  email: string;
  name: string;
}

export interface IDealBling extends IInsertDeal {
  user_id: IUserId;
  won_time: Date;
}

export class SaveDealsUseCase {
  constructor(
    private dealRepository: IDealRepository,
    private getDealsUseCase: any,
    private insertDealERP: any,
    private getDealERPUseCase: any
  ) {}

  async execute(): Promise<any> {
    const deals = await this.getDealsUseCase.execute();
    const dealsBling = await Promise.all(
      deals.data.map(async (deal: IDealBling) => {
        const insertDeal: IInsertDeal = {
          person_id: {
            email: [
              {
                value: deal.person_id.email[0].value
              }
            ]
          },
          person_name: deal.person_name,
          title: deal.title,
          value: deal.value,
          id: deal.id
        };

        const dealInserted = await this.insertDealERP.execute(insertDeal);
        let orderId: string;

        if (dealInserted.retorno.erros) {
          const regExp = /\(([^)]+)\)/;
          orderId = regExp.exec(dealInserted.retorno.erros[0].erro.msg)[1];
        } else {
          orderId = dealInserted.retorno.pedidos[0].pedido.numero;
        }

        const orderDatabase = await this.dealRepository.findOne({
          idBling: String(orderId)
        });

        if (!orderDatabase) {
          const dealSave: IDeal = {
            idBling: orderId,
            idPipedrive: deal.id,
            client: deal.person_name,
            salesman: deal.user_id.name,
            email_salesman: deal.user_id.email,
            typePerson: 'J',
            description: deal.title,
            quantity: 1,
            value_unit: deal.value,
            date: deal.won_time
          };

          const returnDatabase = await this.dealRepository.save(dealSave);

          return returnDatabase;
        }

        return orderDatabase;
      })
    );

    return dealsBling;
  }
}
