import Produto from "../../models/Produto";
import Listagem from "../Listagem";

export default class ListarProdutos extends Listagem{
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public listar() {
        console.log('\n ========== Listar Produtos ========== ')

        this.produtos.forEach((item) => {
            console.log(`Nome: ${item.nome}`)
            console.log(`Descrição: ${item.descricao}`)
            console.log(`Valor: R$${item.getValor}`)
            console.log('--------------------------------')
        })
        
    }
}