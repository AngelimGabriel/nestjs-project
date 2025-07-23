import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/userDto';
import { CreateUserService } from '../service/create.user.service';
import { UpdateUserService } from '../service/update.user.service';
import { DeleteUserService } from '../service/delete.user.service';
import { FindUniqueUserService } from '../service/findUnique.user.service';
import { FindManyUserService } from '../service/findMany.user.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserService: DeleteUserService,
    private readonly findUniqueUserService: FindUniqueUserService,
    private readonly findManyUserService: FindManyUserService,
  ) {}

  @Get()
  findMany() {
    return this.findManyUserService.findMany();
  }
  @Get(':id')
  findUnique(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.findUniqueUserService.findUnique(id);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.create(createUserDto);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserService.update(id, updateUserDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteUserService.remove(id);
  }
}
