import { Request, Response } from 'express';
import { GetDealERPUseCase } from './GetDealERPUseCase';

export class GetDealERPController {
  constructor(private getDealERPUseCase: GetDealERPUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const deal = await this.getDealERPUseCase.execute(request.params.number);
      return response.status(201).json(deal);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
