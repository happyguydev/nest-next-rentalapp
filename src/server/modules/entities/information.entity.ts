import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import { Equipment } from './equipment.entity'

@Entity({ name: 'information' })
export class Information {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 0 })
  rooms: number

  @Column({ default: 0 })
  price: number

  @Column()
  city: string

  @Column()
  address: string

  @OneToMany(
    equipment => Equipment,
    equipment => equipment.information
  )
  equipments: Equipment[]
}
