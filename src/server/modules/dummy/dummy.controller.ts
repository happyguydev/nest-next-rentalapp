import { Controller, Get, Post, Delete, Query, Body, Param, ParseIntPipe } from '@nestjs/common'

import { DummyService } from '~server/modules/dummy/dummy.service'

import { Information } from '../entities/information.entity'

@Controller('dummy')
export class DummyController {
  constructor(private dummyService: DummyService) {}

  @Get()
  async getOne(): Promise<Information> {
    return await this.dummyService.findOne(1)
  }

  @Get('/all')
  async getAll(): Promise<Information[]> {
    return await this.dummyService.findAll()
  }

  @Get('/search')
  async search(@Query() query): Promise<Information[]> {
    return await this.dummyService.search(query.rooms, query.price, query.city, query.address)
  }

  @Post('/add')
  async add(@Body() body): Promise<{}> {
    return await this.dummyService.add(body.rooms, body.price, body.city, body.address, body.equipmentIds)
  }

  @Delete('/remove/:id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{}> {
    return await this.dummyService.remove(id)
  }
}
