import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'equipment_data' })
export class EquipmentData {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
