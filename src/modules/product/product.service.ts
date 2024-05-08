import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import IProductRepository from './repositories/product-repository.interface';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private readonly prodctRepository: IProductRepository,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return this.prodctRepository.create(createProductDto);
  }

  async findAll() {
    return this.prodctRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
