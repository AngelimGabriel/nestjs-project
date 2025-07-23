import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FindManyAddressService } from '../service/findMany.address.service';
import { FindUniqueAddressService } from '../service/findUnique.address.service';
import { CreateAddressService } from '../service/create.address.service';
import { DeleteAddressService } from '../service/delete.address.service';
import { CreateAddressDto } from '../dto/addressDto';

@Controller('address')
export class AddressController {
  constructor(
    private findManyAddressService: FindManyAddressService,
    private findUniqueAddressService: FindUniqueAddressService,
    private createAddressService: CreateAddressService,
    private deleteAddressService: DeleteAddressService,
  ) {}

  @Get()
  findMany() {
    return this.findManyAddressService.findMany();
  }
  @Get(':id')
  findUnique(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.findUniqueAddressService.findUnique(id);
  }
  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.createAddressService.create(createAddressDto);
  }

  @Put()
  update() {}

  @Delete(':id')
  delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.deleteAddressService.delete(id);
  }
}
