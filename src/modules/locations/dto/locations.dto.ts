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
  @IsString({ message: "O nome da unidade deve ser um texto." })
  @IsNotEmpty({ message: "O nome da unidade não pode estar vazio." })
  unidade: string;

  @IsString({ message: "O endereço deve ser um texto." })
  @IsNotEmpty({ message: "O endereço da unidade não pode estar vazio." })
  endereco: string;

  @IsNumber({}, { message: "A latitude deve ser um número decimal." })
  latitude: number;

  @IsNumber({}, { message: "A longitude deve ser um número decimal." })
  longitude: number;

  @IsArray({ message: "A propriedade vaccines deve ser um array." })
  @IsObject({ each: true, message: "Cada vacina deve ser um objeto." })
  @IsOptional()
  vaccines?: VaccinesSchema[];
}
