import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartadoService } from './apartado.service';
import { CreateApartadoDto } from './dto/create-apartado.dto';
import { UpdateApartadoDto } from './dto/update-apartado.dto';

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApartadoDto: UpdateApartadoDto) {
    return this.apartadoService.update(+id, updateApartadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartadoService.remove(+id);
  }
}
