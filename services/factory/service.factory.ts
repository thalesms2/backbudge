import { PrismaService } from 'services/prisma/prisma.service';

export class ServiceFactory<T> {
  constructor(
    readonly prismaService: PrismaService,
    private readonly db: string,
  ) {}

  async listAll(): Promise<Array<T>> {
    return await this.prismaService[this.db].findMany();
  }

  async create(data): Promise<T> {
    return await this.prismaService[this.db].create({
      data: data,
    });
  }

  async updatePerId(id: number, data): Promise<T> {
    return await this.prismaService[this.db].update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async findPerId(id: number): Promise<T> {
    return await this.prismaService[this.db].findUnique({
      where: {
        id: id,
      },
    });
  }

  async deletePerId(id: number): Promise<T> {
    return await this.prismaService[this.db].delete({
      where: {
        id: id,
      },
    });
  }
}
