import { Document, Model } from 'mongoose';
import { Deal } from '../../entities/implementations/MongoDeal';
import { IDealRepository } from '../IDealRepository';
import '../../configs/mongoose';
import { IDeal } from '../../entities/IDeal';

export class MongoDealRepository implements IDealRepository {
  private database: Model<Document, any>;

  constructor() {
    this.database = Deal;
  }

  async save(deal: IDeal): Promise<any> {
    const dealResponse = await this.database.create(deal);

    return dealResponse;
  }

  async findOne(options: any): Promise<any> {
    const deal = await this.database.findOne(options);

    return deal;
  }
}
