import { PartialType } from "@nestjs/mapped-types";
import { IVaccinesDto } from "./vaccines.dto";

export abstract class IVaccinesUpdateDto extends PartialType(IVaccinesDto) {}
