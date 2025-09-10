import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsInt } from "class-validator";

export class IVaccinesDto {
  @ApiProperty({
    example: "vacinese@vacina.com",
    required: true,
    description: "Email do usuario",
  })
  @IsString({ message: "O nome da vacina deve ser um texto." })
  @IsNotEmpty({ message: "O nome da vacina não pode estar vazio." })
  nome: string;

  @ApiProperty({
    example: "COVID-19",
    required: true,
    description: "Doença que a vacina protege",
  })
  @IsString()
  @IsNotEmpty()
  doenca_protecao: string;

  @ApiProperty({
    example: 18,
    required: true,
    description: "Idade indicada para tomar a vacina",
  })
  @IsInt({ message: "A idade indicada deve ser um número inteiro." })
  @IsNotEmpty()
  idade_indicada: number;

  @ApiProperty({
    example: "2 doses",
    required: true,
    description: "Número de doses da vacina",
  })
  @IsString()
  @IsNotEmpty()
  dose: string;
}
