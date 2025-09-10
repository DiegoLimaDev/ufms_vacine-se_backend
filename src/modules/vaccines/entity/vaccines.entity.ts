import { LocationsSchema } from "src/modules/locations/entity/locations.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("vaccines")
export class VaccinesSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  doenca_protecao: string;

  @Column({ type: "int" })
  idade_indicada: number;

  @Column()
  dose: string;

  @ManyToMany(() => LocationsSchema, (location) => location.vaccines)
  locations?: LocationsSchema[];
}
