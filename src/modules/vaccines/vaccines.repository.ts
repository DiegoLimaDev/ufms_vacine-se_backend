import { InjectRepository } from "@nestjs/typeorm";
import { VaccinesSchema } from "./entity/vaccines.entity";
import { IBaseRepository } from "src/shared/core/base.repository";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class VaccinesRepository extends IBaseRepository<VaccinesSchema> {
  constructor(
    @InjectRepository(VaccinesSchema)
    private readonly vaccinesRepository: Repository<VaccinesSchema>,
  ) {
    super(vaccinesRepository);
  }
}
