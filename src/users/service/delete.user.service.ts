import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DeleteUserService {
  constructor(private prisma: PrismaService) {}
  async remove(id: string) {
    return await this.prisma.user.delete({ where: { id: id } });
  }
}
