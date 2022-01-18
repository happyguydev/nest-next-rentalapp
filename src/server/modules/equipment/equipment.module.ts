import { Module, Global } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EquipmentService } from '~server/modules/equipment/equipment.service'
import { EquipmentController } from '~server/modules/equipment/equipment.controller'

import { Equipment } from '../entities/equipment.entity'
import { EquipmentData } from '../entities/equipmentData.entity'

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Equipment, EquipmentData])],
  providers: [EquipmentService],
  controllers: [EquipmentController]
})
export class EquipmentModule {}
