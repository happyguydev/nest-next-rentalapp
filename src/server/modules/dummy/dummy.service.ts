import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getConnection, Repository, Like, } from 'typeorm'
import { Information } from '../entities/information.entity'
import { Equipment } from '../entities/equipment.entity'
import { EquipmentService } from '../equipment/equipment.service'

@Injectable()
export class DummyService {
  constructor(
    @InjectRepository(Information)
    private informationRepository: Repository<Information>,
    private equipmentService: EquipmentService
  ) {}

  findAll(): Promise<Information[]> {
    return this.informationRepository.find({ relations: ['equipments', 'equipments.equipmentData'] })
  }

  findOne(id: number): Promise<Information> {
    return this.informationRepository.findOne({
      where: {
        id
      },
      relations: ['equipments']
    })
  }

  search(rooms: number, price: number, city: string, address: string): Promise<Information[]> {
    return this.informationRepository.find({
      where: {
        rooms: rooms,
        price: price,
        city: Like('%' + city + '%'),
        address: Like('%' + address + '%')
      },
      relations: ['equipments', 'equipments.equipmentData']
    })
  }

  async add(rooms: number, price: number, city: string, address: string, equipmentId: []): Promise<any> {
    const infoData = new Information()
    infoData.rooms = rooms
    infoData.price = price
    infoData.city = city
    infoData.address = address

    const newInfo = await this.informationRepository.save(infoData)

    for (const item of equipmentId) {
      await this.equipmentService.equipmentRepository.insert({ informationId: newInfo.id, equipmentDataId: item })
    }

    return newInfo
  }

  public async remove(id: number): Promise<any> {
    const res = await this.informationRepository.findOne({
      where: {
        id
      }
    })

    const resEquipment = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Equipment)
      .where('informationId = :informationId', { informationId: res.id })
      .execute()
    const resInfo = await this.informationRepository.delete(id)
    return resEquipment && resInfo
  }
}
