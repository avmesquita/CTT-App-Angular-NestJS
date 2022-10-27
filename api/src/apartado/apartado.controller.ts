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
  create(@Body() createApartadoDto: CreateApartadoDto) {
    return this.apartadoService.create(createApartadoDto);
  }

  @Get()
  findAll() {
    return this.apartadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartadoService.findOne(+id);
  }

  @Get('paginate/:page/:limit')
  paginate(
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
  update(@Param('id') id: string, @Body() updateApartadoDto: UpdateApartadoDto) {
    return this.apartadoService.update(+id, updateApartadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartadoService.remove(+id);
  }
}
