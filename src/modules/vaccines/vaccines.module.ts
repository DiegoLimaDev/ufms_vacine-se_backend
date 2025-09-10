import { Module } from "@nestjs/common";
import { VaccinesController } from "./vaccines.controller";
import { VaccinesService } from "./vaccines.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VaccinesSchema } from "./entity/vaccines.entity";
import { VaccinesRepository } from "./vaccines.repository";

@Module({
  imports: [TypeOrmModule.forFeature([VaccinesSchema])],
  controllers: [VaccinesController],
  providers: [VaccinesService, VaccinesRepository],
})
export class VaccinesModule {}
