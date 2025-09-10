import { NotFoundException } from "@nestjs/common";
import { IBaseRepository } from "./base.repository";

export abstract class IBaseService<T> {
  constructor(private readonly repository: IBaseRepository<T>) {}

  async getAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<T | null> {
    const entity = await this.repository.findById(id);

    if (!entity) {
      throw new NotFoundException(`Recurso com o ID ${id} não encontrado.`);
    }

    return entity;
  }

  async create(item: T): Promise<T> {
    return this.repository.create(item);
  }

  async update(id: string, item: Partial<T>): Promise<T | null> {
    return this.repository.update(id, item);
  }

  async delete(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
