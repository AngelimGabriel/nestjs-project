import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FindUniqueAddressService {
  constructor(private prisma: PrismaService) {}
  async findUnique(id: string) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    if (!address) {
      throw new NotFoundException('Endereço não encontrado');
    }
    return address;
  }
}
