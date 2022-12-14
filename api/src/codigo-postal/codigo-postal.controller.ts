import { Controller, Get, Post, Body, Patch, Param, Delete, Header } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CodigoPostalService } from './codigo-postal.service';
import { CreateCodigoPostalDto } from './dto/create-codigo-postal.dto';
import { UpdateCodigoPostalDto } from './dto/update-codigo-postal.dto';

@ApiTags('codigo-postal')
@Controller('codigo-postal')
export class CodigoPostalController {
  constructor(private readonly codigoPostalService: CodigoPostalService) {}

  @Post()
  @Header('Cache-Control', 'none')
  async create(@Body() createCodigoPostalDto: CreateCodigoPostalDto) {
    return this.codigoPostalService.create(createCodigoPostalDto);
  }

  @Get()
  @Header('Cache-Control', 'none')
  async findAll() {
    return this.codigoPostalService.findAll();
  }

  @Get(':id')
  @Header('Cache-Control', 'none')
  async findOne(@Param('id') id: string) {
    return this.codigoPostalService.findOne(+id);
  }

  @Get('paginate/:page/:limit')
  @Header('Cache-Control', 'none')
  async paginate(
    @Param('page') page: number = 1,
    @Param('limit') limit: number = 10
  ) {
    limit = limit > 100 ? 100 : limit;        

    return this.codigoPostalService.paginateAll({
        limit: Number(limit),
        page: Number(page),
        route: 'http://localhost:3000/api/codigo-postal/paginate'
    })
  }

  @Get('cp/:text')
  @Header('Cache-Control', 'none')
  async cpext(
    @Param('text') text: string = ''
  ) {    
    return this.codigoPostalService.findCP(text);
  }

  @Patch(':id')
  @Header('Cache-Control', 'none')
  async update(@Param('id') id: string, @Body() updateCodigoPostalDto: UpdateCodigoPostalDto) {
    return this.codigoPostalService.update(+id, updateCodigoPostalDto);
  }

  @Delete(':id')
  @Header('Cache-Control', 'none')
  async remove(@Param('id') id: string) {
    return this.codigoPostalService.remove(+id);
  }
}
