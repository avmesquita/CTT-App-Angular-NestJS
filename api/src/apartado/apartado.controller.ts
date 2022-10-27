import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartadoService } from './apartado.service';
import { CreateApartadoDto } from './dto/create-apartado.dto';
import { UpdateApartadoDto } from './dto/update-apartado.dto';

@ApiTags('apartado')
@Controller('apartado')
export class ApartadoController {
  constructor(private readonly apartadoService: ApartadoService) {}

  @Post()
  async create(@Body() createApartadoDto: CreateApartadoDto) {
    return this.apartadoService.create(createApartadoDto);
  }

  @Get()
  async findAll() {
    return this.apartadoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.apartadoService.findOne(+id);
  }

  @Get('paginate/:page/:limit')
  async paginate(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    limit = limit > 100 ? 100 : limit;        

    return this.apartadoService.paginateAll({
        limit: Number(limit),
        page: Number(page),
        route: 'http://localhost:3000/api/apartado/paginate'
    })
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateApartadoDto: UpdateApartadoDto) {
    return this.apartadoService.update(+id, updateApartadoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.apartadoService.remove(+id);
  }
}
