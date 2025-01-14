import { PrismaService } from '../prisma/prisma.service';

export class ServiceFactory {
  constructor(
    readonly prismaService: PrismaService,
    private readonly db: string,
  ) {}

  async listAll() {
    return await this.prismaService[this.db].findMany();
  }

  async create(data) {
    return await this.prismaService[this.db].create({
      data: data,
    });
  }

  async updatePerId(id: number, data) {
    return await this.prismaService[this.db].update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async findPerId(id: number) {
    return await this.prismaService[this.db].findUnique({
      where: {
        id: id,
      },
    });
  }

  async deletePerId(id: number) {
    return await this.prismaService[this.db].delete({
      where: {
        id: id,
      },
    });
  }
}
