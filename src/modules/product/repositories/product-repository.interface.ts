import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';

export default interface IProductRepository {
  create(data: CreateProductDto): Promise<Product>;
  findAll(): Promise<Product[]>;
}
