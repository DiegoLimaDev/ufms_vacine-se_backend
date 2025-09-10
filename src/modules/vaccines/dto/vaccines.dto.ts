import { IsString, IsNotEmpty, IsInt } from "class-validator";

export class IVaccinesDto {
  @IsString({ message: "O nome da vacina deve ser um texto." })
  @IsNotEmpty({ message: "O nome da vacina não pode estar vazio." })
  nome: string;

  @IsString()
  @IsNotEmpty()
  doenca_protecao: string;

  @IsInt({ message: "A idade indicada deve ser um número inteiro." })
  @IsNotEmpty()
  idade_indicada: number;

  @IsString()
  @IsNotEmpty()
  dose: string;
}
