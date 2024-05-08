import { ICreditCardDTO } from './credit-card.dto';

export interface ITransactionDTO {
  client_id: string;
  client_name: string;
  total_to_pay: number;
  credit_card: ICreditCardDTO;
}
