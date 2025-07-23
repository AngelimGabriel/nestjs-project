import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from '../dto/userDto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UpdateUserService {
  constructor(private prisma: PrismaService) {}
  async update(id: string, data: UpdateUserDto) {
    const existUser = await this.prisma.user.findUnique({ where: { id: id } });
    if (!existUser) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const updateReturn = await this.prisma.user.update({
      where: { id: id },
      data: data,
    });
    if (!updateReturn) {
      throw new BadRequestException(
        'Não foi possível atualizar o usuário, tente novamente',
      );
    }
    return { id: id, updated: true, message: 'Usuário atualizado' };
  }
}
