import { Injectable } from '@nestjs/common';
import IPurchaseRepository from './purchase-repository.interface';
import { PrismaService } from 'src/database/PrismaService';
import { CreatePurchaseDto } from '../dto/create-purchase.dto';
import { Purchase } from '../entities/purchase.entity';

@Injectable()
export class PrismaPurchaseRepository implements IPurchaseRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: CreatePurchaseDto): Promise<Purchase> {
    return this.prismaService.purchase.create({ data });
  }
  async findAll(): Promise<Purchase[]> {
    return this.prismaService.purchase.findMany();
  }
  async findByClientId(id: string): Promise<Purchase[]> {
    return this.prismaService.purchase.findMany({
      where: { client_id: id },
    });
  }
}
