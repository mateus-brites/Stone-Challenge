import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';
import IProductRepository from './product-repository.interface';

export class PrismaProductRepository implements IProductRepository {
  create(data: CreateProductDto): Promise<Product> {
    console.log(data);
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
