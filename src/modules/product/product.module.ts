import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaProductRepository } from './repositories/product-repository';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    {
      provide: 'ProductRepository',
      useClass: PrismaProductRepository,
    },
  ],
})
export class ProductModule {}
