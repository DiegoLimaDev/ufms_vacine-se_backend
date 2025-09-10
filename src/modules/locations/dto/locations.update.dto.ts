import { PartialType } from "@nestjs/mapped-types";
import { ILocationsDto } from "./locations.dto";

export abstract class ILocationsUpdateDto extends PartialType(ILocationsDto) {}
