import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty({ message: 'O Cep é obrigatório' })
  cep: string;

  @IsNotEmpty({ message: 'O logradouro é obrigatório' })
  logradouro: string;

  @IsNotEmpty({ message: 'O numero é obrigatório' })
  numero: string;

  @IsOptional()
  @IsNotEmpty({ message: 'O complemento é obrigatório' })
  complemento: string;

  @IsNotEmpty({ message: 'O bairro é obrigatório' })
  bairro: string;

  @IsNotEmpty({ message: 'A cidade é obrigatória' })
  cidade: string;

  @IsNotEmpty({ message: 'O estado é obrigatório' })
  estado: string;

  @IsNotEmpty({ message: 'O pais é obrigatório' })
  pais: string;
}

export class CreateUserDto {
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsOptional()
  address?: CreateAddressDto;
}

export class UpdateUserDto {
  @IsOptional()
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsOptional()
  @IsNotEmpty()
  name: string;
}
