import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IBaseRepository } from "src/shared/core/base.repository";
import { LocationsSchema } from "./entity/locations.entity";
import { Repository } from "typeorm";
import { ILocationsUpdateDto } from "./dto/locations.update.dto";

@Injectable()
export class LocationsRepository extends IBaseRepository<LocationsSchema> {
  constructor(
    @InjectRepository(LocationsSchema)
    private readonly locationsRepository: Repository<LocationsSchema>,
  ) {
    super(locationsRepository);
  }

  async findAll(): Promise<LocationsSchema[]> {
    return await this.locationsRepository.find({ relations: ["vaccines"] });
  }

  async findById(id: string): Promise<LocationsSchema | null> {
    return await this.locationsRepository.findOne({
      where: { id: id as any },
      relations: ["vaccines"],
    });
  }

  async update(id: string, dto: ILocationsUpdateDto): Promise<LocationsSchema> {
    const entityToUpdate = await this.locationsRepository.findOne({
      where: { id: id as any },
      relations: ["vaccines"],
    });

    if (!entityToUpdate) {
      throw new NotFoundException(`Local com o ID ${id} não encontrado.`);
    }

    const updatedEntity = this.locationsRepository.merge(entityToUpdate, dto);

    return await this.locationsRepository.save(updatedEntity);
  }
}
