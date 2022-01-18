import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Information } from './information.entity'
import { EquipmentData } from './equipmentData.entity'

@Entity({ name: 'equipment' })
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: false })
  equipmentDataId: number

  @Column()
  informationId: number

  @ManyToOne(() => EquipmentData, { cascade: true })
  @JoinColumn({ name: 'equipmentDataId' })
  equipmentData: EquipmentData

  @ManyToOne(
    () => Information,
    information => information.equipments,
    {
      cascade: ['insert', 'update']
    }
  )
  @JoinColumn({ name: 'informationId' })
  information: Information
}
