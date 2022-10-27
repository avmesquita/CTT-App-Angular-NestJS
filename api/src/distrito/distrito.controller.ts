import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DistritoService } from './distrito.service';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';

@ApiTags('distrito')
@Controller('distrito')
export class DistritoController {
  constructor(private readonly distritoService: DistritoService) {}

  @Post()
  create(@Body() createDistritoDto: CreateDistritoDto) {
    return this.distritoService.create(createDistritoDto);
  }

  @Get()
  findAll() {
    return this.distritoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distritoService.findOne(+id);
  }

  @Get('paginate/:page/:limit')
  paginate(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    limit = limit > 100 ? 100 : limit;        

    return this.distritoService.paginateAll({
        limit: Number(limit),
        page: Number(page),
        route: 'http://localhost:3000/api/distrito/paginate'
    })
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistritoDto: UpdateDistritoDto) {
    return this.distritoService.update(+id, updateDistritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distritoService.remove(+id);
  }
}
