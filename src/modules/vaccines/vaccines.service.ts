import { Injectable } from "@nestjs/common";
import { IBaseService } from "src/shared/core/base.service";
import { VaccinesRepository } from "./vaccines.repository";
import { IVaccinesDto } from "./dto/vaccines.dto";

@Injectable()
export class VaccinesService extends IBaseService<IVaccinesDto> {
  constructor(private readonly vaccinesRepository: VaccinesRepository) {
    super(vaccinesRepository);
  }
}
