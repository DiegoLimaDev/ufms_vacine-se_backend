import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { VaccinesService } from "./vaccines.service";
import { IVaccinesDto } from "./dto/vaccines.dto";
import { IVaccinesUpdateDto } from "./dto/vaccines.update.dto";

@Controller("vaccines")
export class VaccinesController {
  constructor(private readonly vaccinesService: VaccinesService) {}

  @Get()
  async getAll(): Promise<IVaccinesDto[]> {
    return await this.vaccinesService.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<IVaccinesDto> {
    return await this.vaccinesService.getById(id);
  }

  @Post()
  async create(@Body() dto: IVaccinesDto): Promise<IVaccinesDto> {
    return await this.vaccinesService.create(dto);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() dto: IVaccinesUpdateDto,
  ): Promise<IVaccinesDto> {
    return await this.vaccinesService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<boolean> {
    return await this.vaccinesService.delete(id);
  }
}
