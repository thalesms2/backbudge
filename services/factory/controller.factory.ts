import { Get, Param, Delete, UseGuards, Body, Post, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../../src/auth/guard/jwt-auth.guard';

export class ControllerFactory<TDto> {
  constructor(readonly service: any) {}

  @UseGuards(JwtAuthGuard)
  @Get('list-all')
  async listAll() {
    return await this.service.listAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findPerId(@Param('id') id: string) {
    return await this.service.findPerId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: TDto) {
    return await this.service.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updatePerId(@Param('id') id: string, @Body() data: TDto) {
    return await this.service.updatePerId(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deletePerId(@Param('id') id: string) {
    return await this.service.deletePerId(id);
  }
}
