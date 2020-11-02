export type IEmail = {
  value: string;
};

export interface IPersonId {
  email: Array<IEmail>;
}

export interface IInsertDealERPRequestDTO {
  person_name: string;
  person_id: IPersonId;
  id: number;
  title: string;
  value: number;
}
