import { PrismaService } from 'src/database/PrismaService';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';
import IProductRepository from './product-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductRepository implements IProductRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: CreateProductDto): Promise<Product> {
    return this.prismaService.product.create({ data });
  }
  async findAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }
}
