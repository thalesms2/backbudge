import { Recurrence, TransactionStatus, TransactionType } from '@prisma/client';

export class ScheduleDto {
  amout: number;
  type: TransactionType;
  status: TransactionStatus;
  acountId?: number;
  cardId?: number;
  duoDate?: Date;
  title: string;
  description?: string;
  categoryId?: number;
  subcategoryId?: number;
  startDate?: Date;
  endDate?: Date;
  recurrence?: Recurrence;
  infinity: boolean;
  userId: number;
}
