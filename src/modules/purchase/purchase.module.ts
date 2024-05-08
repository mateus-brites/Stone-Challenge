import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { PrismaService } from 'src/database/PrismaService';
import { PrismaPurchaseRepository } from './repositories/purchase-repository';
import { CryptoProvider } from 'src/providers/crypto/crypto';
import { CacheProvider } from 'src/providers/cache/cache';

@Module({
  controllers: [PurchaseController],
  providers: [
    PurchaseService,
    PrismaService,
    {
      provide: 'PurchaseRepository',
      useClass: PrismaPurchaseRepository,
    },
    CryptoProvider,
    CacheProvider,
  ],
})
export class PurchaseModule {}
