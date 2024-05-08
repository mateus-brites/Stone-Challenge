import { CreatePurchaseDto } from '../dto/create-purchase.dto';
import { Purchase } from '../entities/purchase.entity';

export default interface IPurchaseRepository {
  create(data: CreatePurchaseDto): Promise<Purchase>;
  findAll(): Promise<Purchase[]>;
  findByClientId(id: string): Promise<Purchase[]>;
}
