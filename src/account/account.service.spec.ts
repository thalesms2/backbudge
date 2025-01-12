// import { Test, TestingModule } from '@nestjs/testing';
// import { PrismaService } from '../../services/prisma/prisma.service';
// import { AccountService } from './account.service';
// import { IAccount } from './interface/account.interface';

// describe('AccountService', () => {
//   let service: AccountService;
//   let prismaService: PrismaService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         AccountService,
//         {
//           provide: PrismaService,
//           useValue: {
//             Account: {
//               create: jest.fn(),
//               update: jest.fn(),
//             },
//           },
//         },
//       ],
//     }).compile();

//     service = module.get<AccountService>(AccountService);
//     prismaService = module.get<PrismaService>(PrismaService);
//   });

//   it('should display hello world', async () => {
//     const account: IAccount = {
//       name: 'John Doe',
//     };
//     jest.spyOn(prismaService.account, 'findMany').mockResolvedValue(account);
//     const result = await service.listAll();
//     expect(result).toEqual(account);
//   });
// });
