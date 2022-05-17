import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from './entities/produto.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() produto: CreateProdutoDto) {
    return this.produtoService.create(produto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() produto: Produto) {
    return this.produtoService.update(+id, produto);
  }
  @Put(':id')
  put(@Param('id') id: string, @Body() produto: Produto) {
    return this.produtoService.update(+id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
