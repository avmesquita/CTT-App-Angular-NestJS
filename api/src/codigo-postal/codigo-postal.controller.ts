import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodigoPostalService } from './codigo-postal.service';
import { CreateCodigoPostalDto } from './dto/create-codigo-postal.dto';
import { UpdateCodigoPostalDto } from './dto/update-codigo-postal.dto';

@Controller('codigo-postal')
export class CodigoPostalController {
  constructor(private readonly codigoPostalService: CodigoPostalService) {}

  @Post()
  create(@Body() createCodigoPostalDto: CreateCodigoPostalDto) {
    return this.codigoPostalService.create(createCodigoPostalDto);
  }

  @Get()
  findAll() {
    return this.codigoPostalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codigoPostalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodigoPostalDto: UpdateCodigoPostalDto) {
    return this.codigoPostalService.update(+id, updateCodigoPostalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codigoPostalService.remove(+id);
  }
}
