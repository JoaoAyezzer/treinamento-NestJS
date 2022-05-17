import { Fornecedor } from './../fornecedor/entities/fornecedor.entity';
import { FornecedorModule } from './../fornecedor/fornecedor.module';
import { FornecedorService } from './../fornecedor/fornecedor.service';
import { Produto } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [
    FornecedorModule,
    TypeOrmModule.forFeature([Produto, Fornecedor])
  ],
  controllers: [ProdutoController],
  providers: [ 
    ProdutoService,
    FornecedorService],
})
export class ProdutoModule {}
