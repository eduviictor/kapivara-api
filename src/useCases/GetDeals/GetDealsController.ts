import { Request, Response } from 'express';
import { GetDealsUseCase } from './GetDealsUseCase';

export class GetDealsController {
  constructor(private getDealsUseCase: GetDealsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const deals = await this.getDealsUseCase.execute();
      return response.status(201).json(deals);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
