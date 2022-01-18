import { Controller, Get } from '@nestjs/common'

import { EquipmentService } from '~server/modules/equipment/equipment.service'

import { EquipmentData } from '../entities/equipmentData.entity'

@Controller('equipment')
export class EquipmentController {
  constructor(private equipmentService: EquipmentService) {}

  @Get()
  async getEquipments(): Promise<EquipmentData[]> {
    return await this.equipmentService.getEquipmentData()
  }
}
