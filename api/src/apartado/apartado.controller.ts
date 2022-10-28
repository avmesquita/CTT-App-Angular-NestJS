import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Header } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartadoService } from './apartado.service';
import { CreateApartadoDto } from './dto/create-apartado.dto';
import { UpdateApartadoDto } from './dto/update-apartado.dto';

@ApiTags('apartado')
@Controller('apartado')
export class ApartadoController {
  constructor(private readonly apartadoService: ApartadoService) {}

  @Post()
  @Header('Cache-Control', 'none')
  async create(@Body() createApartadoDto: CreateApartadoDto) {
    return this.apartadoService.create(createApartadoDto);
  }

  @Get()
  @Header('Cache-Control', 'none')
  async findAll() {
    return this.apartadoService.findAll();
  }

  @Get(':id')
  @Header('Cache-Control', 'none')
  async findOne(@Param('id') id: string) {
    return this.apartadoService.findOne(+id);
  }

  @Get('paginate/:page/:limit')
  @Header('Cache-Control', 'none')
  async paginate(
    @Param('page') page: number = 1,    
    @Param('limit') limit: number = 10
  ) {
    limit = limit > 100 ? 100 : limit;        

    return this.apartadoService.paginateAll({
        limit: Number(limit),
        page: Number(page),
        route: 'http://localhost:3000/api/apartado/paginate'
    })
  }

  @Get('find-text/:text')
  @Header('Cache-Control', 'none')
  async cpext(
    @Param('text') text: string    
  ) {
    if (text === undefined || text === 'undefined' || text === null || text === '')
      return this.apartadoService.findAll();    
    else
      return this.apartadoService.findText(text);      
  }

  @Patch(':id')
  @Header('Cache-Control', 'none')
  async update(@Param('id') id: string, @Body() updateApartadoDto: UpdateApartadoDto) {
    return this.apartadoService.update(+id, updateApartadoDto);
  }

  @Delete(':id')
  @Header('Cache-Control', 'none')
  async remove(@Param('id') id: string) {
    return this.apartadoService.remove(+id);
  }
}
