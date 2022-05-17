import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Fornecedor } from './../fornecedor/entities/fornecedor.entity';
import { Produto } from './entities/produto.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    @InjectRepository(Fornecedor)
    private fornecedorRepository: Repository<Fornecedor>
  ) {}

  create(produto: CreateProdutoDto) {
    produto.id = null;
    return this.produtoRepository.save(this.produtoFromDTO(produto));
  }

  findAll() {
    return this.produtoRepository.find();
  }

  findOne(id: number) {
    return this.produtoRepository.findOne(id);
  }

  update(id: number, produto: Produto) {
    return this.produtoRepository.update(id, produto);
  }

  remove(id: number) {
    return this.produtoRepository.delete(id);
  }

  produtoFromDTO(produtoDTO: CreateProdutoDto | UpdateProdutoDto) {
    const produto = new Produto();
    produto.id = (produtoDTO.id) ? produtoDTO.id : null;
    produto.descricao = produtoDTO.descricao;
    produto.valor = produtoDTO.valor;
    produto.estoque = produtoDTO.estoque;
    this.fornecedorRepository.findOne(produtoDTO.fornecedorId).then(fornecedor => {
      produto.fornecedor = fornecedor;
    })
    return produto;
  }


}
