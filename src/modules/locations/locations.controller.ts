import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { LocationsService } from "./locations.service";
import { ILocationsDto } from "./dto/locations.dto";
import { ILocationsUpdateDto } from "./dto/locations.update.dto";

@Controller("locations")
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  async getAll(): Promise<ILocationsDto[]> {
    return await this.locationsService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<ILocationsDto> {
    return await this.locationsService.getById(id);
  }

  @Post()
  async create(@Body() dto: ILocationsDto): Promise<ILocationsDto> {
    return await this.locationsService.create(dto);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() dto: ILocationsUpdateDto,
  ): Promise<ILocationsDto> {
    return await this.locationsService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<boolean> {
    return await this.locationsService.delete(id);
  }
}
