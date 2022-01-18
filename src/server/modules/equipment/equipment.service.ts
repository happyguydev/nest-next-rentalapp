import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'
import { Equipment } from '../entities/equipment.entity'
import { EquipmentData } from '../entities/equipmentData.entity'

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    public equipmentRepository: Repository<Equipment>
  ) {}

  getAll(): Promise<Equipment[]> {
    return this.equipmentRepository.find({ relations: ['equipmentData'] })
  }

  getEquipmentData(): Promise<EquipmentData[]> {
    return getRepository(EquipmentData)
      .createQueryBuilder('equipment_data')
      .getMany()
  }
}
