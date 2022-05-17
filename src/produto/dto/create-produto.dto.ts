import { Produto } from './../entities/produto.entity';
export class CreateProdutoDto {
    id: number;
    descricao: string;
    valor: number;
    estoque: number;
    fornecedorId: number;
}
