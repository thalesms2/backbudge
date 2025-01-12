import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { ServiceFactory } from 'services/factory/service.factory';
import { IUser } from './interface/user.interface';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService extends ServiceFactory<IUser> {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'User');
  }

  async findOne(username: string) {
    return this.prismaService.user.findUnique({
      where: {
        username: username,
      },
    });
  }

  async signUp(user) {
    return this.prismaService.user.create({
      select: {
        id: true,
        deleted: true,
      },
      data: {
        username: user.username,
        password: user.password,
        deleted: false,
        role: Role.ADMIN,
      },
    });
  }
}
