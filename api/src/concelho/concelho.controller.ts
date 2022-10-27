import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConcelhoService } from './concelho.service';
import { CreateConcelhoDto } from './dto/create-concelho.dto';
import { UpdateConcelhoDto } from './dto/update-concelho.dto';

@ApiTags('concelho')
@Controller('concelho')
export class ConcelhoController {
  constructor(private readonly concelhoService: ConcelhoService) {}

  @Post()
  create(@Body() createConcelhoDto: CreateConcelhoDto) {
    return this.concelhoService.create(createConcelhoDto);
  }

  @Get()
  findAll() {
    return this.concelhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.concelhoService.findOne(+id);
  }

  @Get('paginate/:page/:limit')
  paginate(
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


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConcelhoDto: UpdateConcelhoDto) {
    return this.concelhoService.update(+id, updateConcelhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concelhoService.remove(+id);
  }
}
