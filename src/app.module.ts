import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AddressModule } from './address/address.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    PrismaModule,
    AddressModule,
  ],
})
export class AppModule {}
