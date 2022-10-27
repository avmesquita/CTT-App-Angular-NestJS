import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Header } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConcelhoService } from './concelho.service';
import { CreateConcelhoDto } from './dto/create-concelho.dto';
import { UpdateConcelhoDto } from './dto/update-concelho.dto';

@ApiTags('concelho')
@Controller('concelho')
export class ConcelhoController {
  constructor(private readonly concelhoService: ConcelhoService) {}

  @Post()
  @Header('Cache-Control', 'none')
  async create(@Body() createConcelhoDto: CreateConcelhoDto) {
    return this.concelhoService.create(createConcelhoDto);
  }

  @Get()
  @Header('Cache-Control', 'none')
  async findAll() {
    return this.concelhoService.findAll();
  }

  @Get(':id')
  @Header('Cache-Control', 'none')
  async findOne(@Param('id') id: string) {
    return this.concelhoService.findOne(+id);
  }

  @Get('paginate/:page/:limit')
  @Header('Cache-Control', 'none')
  async paginate(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    limit = limit > 100 ? 100 : limit;        

    return this.concelhoService.paginateAll({
        limit: Number(limit),
        page: Number(page),
        route: 'http://localhost:3000/api/concelho/paginate'
    })
  }

  @Get('find-text/:text')
  @Header('Cache-Control', 'none')
  async cpext(
    @Query('text') text: string    
  ) {    
    return this.concelhoService.findConcelhoName(text);
  }

  @Patch(':id')
  @Header('Cache-Control', 'none')
  async update(@Param('id') id: string, @Body() updateConcelhoDto: UpdateConcelhoDto) {
    return this.concelhoService.update(+id, updateConcelhoDto);
  }

  @Delete(':id')
  @Header('Cache-Control', 'none')
  async remove(@Param('id') id: string) {
    return this.concelhoService.remove(+id);
  }
}
