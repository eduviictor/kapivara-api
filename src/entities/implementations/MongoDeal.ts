import { Document, model, Schema } from 'mongoose';
import { IDeal } from '../IDeal';

export interface IMongoDeal extends IDeal, Document {}

export const DealSchema: Schema = new Schema({
  idBling: {
    type: String
  },
  idPipedrive: {
    type: Number
  },
  client: {
    type: String
  },
  salesman: {
    type: String
  },
  email_salesman: {
    type: String
  },
  typePerson: {
    type: String
  },
  description: {
    type: String
  },
  quantity: {
    type: Number
  },
  value_unit: {
    type: Number
  },
  date: {
    type: Date
  }
});

const Deal = model<IMongoDeal>('Deal', DealSchema);

export { Deal };
