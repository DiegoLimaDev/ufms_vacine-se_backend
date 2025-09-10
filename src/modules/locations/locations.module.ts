import { Module } from "@nestjs/common";
import { LocationsService } from "./locations.service";
import { LocationsController } from "./locations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocationsSchema } from "./entity/locations.entity";
import { LocationsRepository } from "./locations.repository";

@Module({
  imports: [TypeOrmModule.forFeature([LocationsSchema])],
  controllers: [LocationsController],
  providers: [LocationsService, LocationsRepository],
})
export class LocationsModule {}
