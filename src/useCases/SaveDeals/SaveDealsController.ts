import { Request, Response } from 'express';
import { SaveDealsUseCase } from './SaveDealsUseCase';

export class SaveDealsController {
  constructor(private saveDealsUseCase: SaveDealsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.saveDealsUseCase.execute();
      return response.status(201).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
