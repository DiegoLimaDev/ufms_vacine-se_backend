import { VaccinesSchema } from "src/modules/vaccines/entity/vaccines.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("locations")
export class LocationsSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unidade: string;

  @Column()
  endereco: string;

  @Column({ type: "decimal" })
  latitude: number;

  @Column({ type: "decimal" })
  longitude: number;

  @ManyToMany(() => VaccinesSchema)
  @JoinTable()
  vaccines?: VaccinesSchema[];
}
