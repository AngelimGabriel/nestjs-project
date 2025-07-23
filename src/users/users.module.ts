import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { CreateUserService } from './service/create.user.service';
import { UpdateUserService } from './service/update.user.service';
import { DeleteUserService } from './service/delete.user.service';
import { FindUniqueUserService } from './service/findUnique.user.service';
import { FindManyUserService } from './service/findMany.user.service';

@Module({
  controllers: [UsersController],
  providers: [
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
    FindUniqueUserService,
    FindManyUserService,
  ],
})
export class UsersModule {}
