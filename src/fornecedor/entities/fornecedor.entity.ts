import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Table } from 'typeorm';
import { Produto } from './../../produto/entities/produto.entity';

@Entity()
export class Fornecedor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    email: string;
    @Column()
    telefone: string;
    @OneToMany(() => Produto, produto => produto.fornecedor)
    produtos: Produto[];
}
