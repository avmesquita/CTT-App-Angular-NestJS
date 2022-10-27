import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CodigoPostalService } from './codigo-postal.service';
import { CreateCodigoPostalDto } from './dto/create-codigo-postal.dto';
import { UpdateCodigoPostalDto } from './dto/update-codigo-postal.dto';

@ApiTags('codigo-postal')
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

  @Get('paginate/:page/:limit')
  paginate(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    limit = limit > 100 ? 100 : limit;        

    return this.codigoPostalService.paginateAll({
        limit: Number(limit),
        page: Number(page),
        route: 'http://localhost:3000/api/codigo-postal/paginate'
    })
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
