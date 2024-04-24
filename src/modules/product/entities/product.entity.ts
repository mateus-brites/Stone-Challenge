import { Product as prismaProduct } from '@prisma/client';

export class Product implements prismaProduct {
  id: number;
  itle: string;
  price: number;
  zipcode: string;
  seller: string;
  thumbnailHd: string;
  date: string;
}
