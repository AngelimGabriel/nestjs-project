import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FindUniqueUserService {
  constructor(private prisma: PrismaService) {}
  async findUnique(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { address: true },
    });
    if (!user) {
      throw new NotFoundException('Usuario não encontrado');
    }
    return user;
  }
}
