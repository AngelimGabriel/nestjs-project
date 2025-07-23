import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FindManyAddressService {
  constructor(private prisma: PrismaService) {}
  async findMany() {
    const addresses = await this.prisma.address.findMany();
    if (addresses.length < 1) {
      throw new NotFoundException('Não existem endereços cadastrado');
    }
    return addresses;
  }
}
