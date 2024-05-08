import { Product as prismaProduct } from '@prisma/client';

export class Product implements prismaProduct {
  id: number;
  title: string;
  price: number;
  zipcode: string;
  seller: string;
  thumbnailHd: string;
  date: string;
}
