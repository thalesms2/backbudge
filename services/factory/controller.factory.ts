import {
  Get,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
  Body,
  Post,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../src/auth/guard/jwt-auth.guard';

export class ControllerFactory<T, TDto> {
  constructor(readonly service: any) {}

  @UseGuards(JwtAuthGuard)
  @Get('list-all')
  async listAll(): Promise<Array<T>> {
    return await this.service.listAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findPerId(@Param('id') id: string): Promise<T> {
    try {
      const result = await this.service.findPerId(id);
      if (result) return result;
      throw new HttpException({}, HttpStatus.NO_CONTENT);
    } catch (error) {
      throw new HttpException({ error: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: TDto): Promise<T> {
    try {
      const result = await this.service.create(data);
      if (result) return result;
      throw new HttpException({}, HttpStatus.NO_CONTENT);
    } catch (error) {
      console.error(error);
      throw new HttpException({ error: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updatePerId(@Param('id') id: string, @Body() data: TDto): Promise<T> {
    try {
      const result = await this.service.updatePerId(id, data);
      if (result) return result;
      throw new HttpException({}, HttpStatus.NO_CONTENT);
    } catch (error) {
      throw new HttpException({ error: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deletePerId(@Param('id') id: string): Promise<T> {
    try {
      const result = await this.service.deletePerId(id);
      if (result) return result;
      throw new HttpException({}, HttpStatus.NO_CONTENT);
    } catch (error) {
      throw new HttpException({ error: error }, HttpStatus.BAD_REQUEST);
    }
  }
}
