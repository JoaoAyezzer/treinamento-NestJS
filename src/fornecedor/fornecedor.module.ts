import { Produto } from './../produto/entities/produto.entity';
import { ProdutoModule } from './../produto/produto.module';
import { Fornecedor } from './entities/fornecedor.entity';
import { Module } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorController } from './fornecedor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fornecedor, Produto]),
  ],
  controllers: [FornecedorController],
  providers: [FornecedorService]
})
export class FornecedorModule {}
