import { Module } from '@nestjs/common';
import { AddressController } from './controller/address.controller';
import { FindManyAddressService } from './service/findMany.address.service';
import { FindUniqueAddressService } from './service/findUnique.address.service';
import { CreateAddressService } from './service/create.address.service';
import { DeleteAddressService } from './service/delete.address.service';

@Module({
  controllers: [AddressController],
  providers: [
    FindManyAddressService,
    FindUniqueAddressService,
    CreateAddressService,
    DeleteAddressService,
  ],
})
export class AddressModule {}
