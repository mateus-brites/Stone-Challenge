import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { ITransactionDTO } from './dto/transaction.dto';
import { CryptoProvider } from 'src/providers/crypto/crypto';
@Controller('starstore')
export class PurchaseController {
  constructor(
    private readonly purchaseService: PurchaseService,
    private readonly cryptoProvider: CryptoProvider,
  ) {}

  @Post('/buy')
  async create(@Body() data: ITransactionDTO) {
    const encryptedCardNumber = this.cryptoProvider.encrypt(
      data.credit_card.card_number,
    );
    const createPurchaseDto: CreatePurchaseDto = {
      card_number: encryptedCardNumber,
      client_id: data.client_id,
      date: String(new Date()),
      value: data.credit_card.value,
    };
    return this.purchaseService.create(createPurchaseDto);
  }

  @Get('history')
  async findAll() {
    return this.purchaseService.findAll();
  }

  @Get('history/:id')
  async findByClientId(@Param('id') id: string) {
    return this.purchaseService.findByClientId(id);
  }
}
