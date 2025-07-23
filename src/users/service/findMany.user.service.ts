import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FindManyUserService {
  constructor(private prisma: PrismaService) {}
  async findMany() {
    return await this.prisma.user.findMany({ include: { address: true } });
  }
}
