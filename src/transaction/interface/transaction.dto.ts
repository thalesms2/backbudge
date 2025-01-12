import { TransactionStatus, TransactionType } from '@prisma/client';

export class TransactionDto {
  amout: number;
  type: TransactionType;
  status: TransactionStatus;
  accountId?: number;
  cardId?: number;
  duoDate?: Date;
  title: string;
  description?: string;
  categoryId?: number;
  subcategoryId?: number;
  userId: number;
}
