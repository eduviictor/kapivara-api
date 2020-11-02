import e from 'express';
import { IDeal } from '../entities/IDeal';

export interface IOptionsFindOne {
  [key: string]: string;
}

export interface IDealRepository {
  save(deal: IDeal): Promise<void>;
  findOne(options: IOptionsFindOne): Promise<any>;
}
