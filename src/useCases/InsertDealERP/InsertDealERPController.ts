import { Request, Response } from 'express';
import { IInsertDealERPRequestDTO } from './InsertDealERPDTO';
import { InsertDealERPUseCase } from './InsertDealERPUseCase';

export class InsertDealERPController {
  constructor(private insertDealERP: InsertDealERPUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        id,
        person_id,
        person_name,
        title,
        value
      }: IInsertDealERPRequestDTO = request.body;

      const deal = await this.insertDealERP.execute({
        id,
        person_id,
        person_name,
        title,
        value
      });
      return response.status(201).json(deal);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
