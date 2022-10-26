import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConcelhoDto: UpdateConcelhoDto) {
    return this.concelhoService.update(+id, updateConcelhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concelhoService.remove(+id);
  }
}
