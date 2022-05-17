import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedor } from './entities/fornecedor.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';

@Injectable()
export class FornecedorService {

  constructor(
    @InjectRepository(Fornecedor)
    private fornecedorRepository: Repository<Fornecedor>
  ) { }

  create(createFornecedorDto: CreateFornecedorDto) {
    return this.fornecedorRepository.save(this.fornecedorFromDTO(createFornecedorDto));
  }

  findAll() {
    return this.fornecedorRepository.find();
  }

  findOne(id: number) {
    return this.fornecedorRepository.findOne(id);
  }

  update(id: number, updateFornecedorDto: UpdateFornecedorDto) {
    return this.fornecedorRepository.update(id, this.fornecedorFromDTO(updateFornecedorDto));
  }

  remove(id: number) {
    return this.fornecedorRepository.findOne(id);
  }

  findById(id: number){
    return this.fornecedorRepository.findOne(id);
  }

  fornecedorFromDTO(fornecedorDTO: CreateFornecedorDto | UpdateFornecedorDto) {
    const fornecedor = new Fornecedor();
    fornecedor.id = (fornecedorDTO.id) ? fornecedorDTO.id : null;
    fornecedor.nome = fornecedorDTO.nome;
    fornecedor.email = fornecedorDTO.email;
    fornecedor.telefone = fornecedorDTO.telefone;
    return fornecedor;
  }
}
