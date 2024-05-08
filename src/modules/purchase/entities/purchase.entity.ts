import { Purchase as PrismaPurchase } from '@prisma/client';

export class Purchase implements PrismaPurchase {
  purchase_id: string;
  card_number: string;
  client_id: string;
  value: number;
  date: string;
}
