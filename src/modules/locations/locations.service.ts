import { Injectable } from "@nestjs/common";
import { IBaseService } from "src/shared/core/base.service";
import { ILocationsDto } from "./dto/locations.dto";
import { LocationsRepository } from "./locations.repository";

@Injectable()
export class LocationsService extends IBaseService<ILocationsDto> {
  constructor(private readonly locationsRepository: LocationsRepository) {
    super(locationsRepository);
  }
}
