import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/userDto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CreateUserService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto) {
    const { address, ...rest } = data;
    const existingUser = await this.prisma.user.findUnique({
      where: { email: rest.email },
    });

    if (existingUser) {
      throw new ConflictException('E-mail já cadastrado');
    }

    return await this.prisma.user.create({
      data: { ...rest, address: address ? { create: address } : undefined },
    });
  }
}
