import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ViewModule } from '~server/modules/view/view.module'
import { DummyModule } from '~server/modules/dummy/dummy.module'
import { EquipmentModule } from '~server/modules/equipment/equipment.module'

import { Information } from './modules/entities/information.entity'
import { Equipment } from './modules/entities/equipment.entity'
import { EquipmentData } from './modules/entities/equipmentData.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rental',
      entities: [Information, Equipment, EquipmentData],
      synchronize: true,
      keepConnectionAlive: true
    }),
    EquipmentModule,
    DummyModule,
    ViewModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
