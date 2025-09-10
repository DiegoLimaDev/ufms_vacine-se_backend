import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";
import { VaccinesSchema } from "src/modules/vaccines/entity/vaccines.entity";

export class ILocationsDto {
  @ApiProperty({
    example: "Unidade de Saúde Central",
    required: true,
    description: "Nome da unidade de saúde",
  })
  @IsString({ message: "O nome da unidade deve ser um texto." })
  @IsNotEmpty({ message: "O nome da unidade não pode estar vazio." })
  unidade: string;

  @ApiProperty({
    example: "Rua das Flores, 123 - Centro, Cidade - Estado, 12345-678",
    required: true,
    description: "Endereço completo da unidade de saúde",
  })
  @IsString({ message: "O endereço deve ser um texto." })
  @IsNotEmpty({ message: "O endereço da unidade não pode estar vazio." })
  endereco: string;

  @ApiProperty({
    example: -23.55052,
    required: true,
    description: "Latitude da unidade de saúde",
  })
  @IsNumber({}, { message: "A latitude deve ser um número decimal." })
  latitude: number;

  @ApiProperty({
    example: -46.633308,
    required: true,
    description: "Longitude da unidade de saúde",
  })
  @IsNumber({}, { message: "A longitude deve ser um número decimal." })
  longitude: number;

  @ApiProperty({ example: [{ id: "1" }] })
  @IsArray({ message: "A propriedade vaccines deve ser um array." })
  @IsObject({ each: true, message: "Cada vacina deve ser um objeto." })
  @IsOptional()
  vaccines?: VaccinesSchema[];
}
