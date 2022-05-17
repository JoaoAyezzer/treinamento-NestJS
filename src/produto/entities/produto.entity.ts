import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Fornecedor } from './../../fornecedor/entities/fornecedor.entity';
@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    descricao: string;
    @Column()
    valor: number;
    @Column()
    estoque: number;
    @ManyToOne(() => Fornecedor, fornecedor => fornecedor.produtos)
    fornecedor: Fornecedor;
}
