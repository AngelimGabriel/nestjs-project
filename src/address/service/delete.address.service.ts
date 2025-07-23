import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DeleteAddressService {
  constructor(private prisma: PrismaService) {}
  async delete(id: string) {
    const existAddress = await this.prisma.address.findUnique({
      where: { id },
    });

    if (!existAddress) {
      throw new NotFoundException('Endereço não encontrado');
    }

    const address = await this.prisma.address.delete({ where: { id } });

    if (!address) {
      throw new BadRequestException(
        'Não foi possivel deletar, tente novamente.',
      );
    }

    return { id: id, deleted: true, message: 'Deletado' };
  }
}
