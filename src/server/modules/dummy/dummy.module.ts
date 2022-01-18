import { Module, Global } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DummyService } from '~server/modules/dummy/dummy.service'
import { EquipmentService } from '~server/modules/equipment/equipment.service'
import { DummyController } from '~server/modules/dummy/dummy.controller'

import { Information } from '../entities/information.entity'
import { Equipment } from '../entities/equipment.entity'

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Information, Equipment])],
  providers: [DummyService, EquipmentService],
  controllers: [DummyController]
})
export class DummyModule {}
