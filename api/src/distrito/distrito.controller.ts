import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Header } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DistritoService } from './distrito.service';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';

@ApiTags('distrito')
@Controller('distrito')
export class DistritoController {
  constructor(private readonly distritoService: DistritoService) {}

  @Post()
  @Header('Cache-Control', 'none')
  async create(@Body() createDistritoDto: CreateDistritoDto) {
    return this.distritoService.create(createDistritoDto);
  }

  @Get()
  @Header('Cache-Control', 'none')
  async findAll() {
    return this.distritoService.findAll();
  }

  @Get(':id')
  @Header('Cache-Control', 'none')
  async findOne(@Param('id') id: string) {
    return this.distritoService.findOne(+id);
  }

  @Get('paginate/:page/:limit')
  @Header('Cache-Control', 'none')
  async paginate(
    @Param('page') page: number = 1,
    @Param('limit') limit: number = 10
  ) {
    limit = limit > 100 ? 100 : limit;        

    return this.distritoService.paginateAll({
        limit: Number(limit),
        page: Number(page),
        route: 'http://localhost:3000/api/distrito/paginate'
    })
  }

  @Get('find-text/:text')
  @Header('Cache-Control', 'none')
  async findText(
    @Param('text') text: string = ''
  ) {    
    if (text === undefined || text === 'undefined' || text === null || text === '')
      return this.distritoService.findAll();    
    else
      return this.distritoService.findDistritoName(text);      
  }  

  @Patch(':id')
  @Header('Cache-Control', 'none')
  async update(@Param('id') id: string, @Body() updateDistritoDto: UpdateDistritoDto) {
    return this.distritoService.update(+id, updateDistritoDto);
  }

  @Delete(':id')
  @Header('Cache-Control', 'none')
  async remove(@Param('id') id: string) {
    return this.distritoService.remove(+id);
  }
}
