import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { Repository } from "typeorm";

export abstract class IBaseRepository<T> {
  private ormRepository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.ormRepository = repository;
  }

  async findAll(): Promise<T[]> {
    return await this.ormRepository.find();
  }

  async findById(id: string): Promise<T | null> {
    return await this.ormRepository.findOneBy({ id } as any);
  }

  async create(item: T): Promise<T> {
    try {
      const entity = this.ormRepository.create(item as any);
      return await this.ormRepository.save(entity as any);
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("Um registro com estes dados já existe.");
      }

      console.error("Database Error on Create:", error);
      throw new InternalServerErrorException(
        "Ocorreu um erro ao salvar o registro no banco de dados.",
      );
    }
  }

  async update(id: string, item: Partial<T>): Promise<T | null> {
    const entityToUpdate = await this.findById(id);

    if (!entityToUpdate) {
      throw new NotFoundException("Recurso não encontrado para atualização.");
    }

    const updatedEntity = this.ormRepository.merge(entityToUpdate, item as any);

    try {
      return await this.ormRepository.save(updatedEntity);
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException(
          "A atualização resultaria em dados duplicados.",
        );
      }

      console.error("Database Error on Update:", error);
      throw new InternalServerErrorException(
        "Ocorreu um erro ao atualizar o registro no banco de dados.",
      );
    }
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.ormRepository.delete(id);
    return result.affected > 0;
  }
}
