import { ProdutoService } from './produto/produto.service';
import { FornecedorService } from './fornecedor/fornecedor.service';
import { Fornecedor } from './fornecedor/entities/fornecedor.entity';
import { Produto } from './produto/entities/produto.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProdutoModule, 
    FornecedorModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'treinamento',
      entities: [Produto, Fornecedor],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
