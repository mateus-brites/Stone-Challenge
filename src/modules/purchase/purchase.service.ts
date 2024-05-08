import { Inject, Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import IPurchaseRepository from './repositories/purchase-repository.interface';
import { CacheProvider } from 'src/providers/cache/cache';

@Injectable()
export class PurchaseService {
  constructor(
    @Inject('PurchaseRepository')
    private readonly purchaseRepository: IPurchaseRepository,
    private readonly cacheProvider: CacheProvider,
  ) {}
  async create(createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseRepository.create(createPurchaseDto);
  }

  async findAll() {
    const cached = await this.cacheProvider.get('find-all-purchases');
    if (cached) {
      return cached;
    }
    const allPurchases = await this.purchaseRepository.findAll();
    await this.cacheProvider.set('find-all-purchases', allPurchases);
    return allPurchases;
  }

  async findByClientId(id: string) {
    return this.purchaseRepository.findByClientId(id);
  }
}
