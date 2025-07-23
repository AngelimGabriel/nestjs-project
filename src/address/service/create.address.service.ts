import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAddressDto } from '../dto/addressDto';

@Injectable()
export class CreateAddressService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateAddressDto) {
    const { userId, ...rest } = data;
    const existAddress = await this.prisma.address.findUnique({
      where: { userId: userId },
    });

    if (existAddress) {
      throw new ConflictException(
        'Usuário ja possui um endereço, impossível criar outro',
      );
    }

    return this.prisma.address.create({
      data: { ...rest, user: { connect: { id: userId } } },
    });
  }
}
