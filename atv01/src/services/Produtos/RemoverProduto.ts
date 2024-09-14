import Produto from "../../models/Produto";
import Entrada from "../../utils/Entrada";
import Remover from "../Remover";

export default class RemoverProduto extends Remover{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public remover(){
        console.log('\n ========== Remover Produto ========== ')

        console.log('Escolha um produto para excluir:')
        this.produtos.forEach((item, index) => {
            console.log(`${index} - ${item.nome}`)
        })

        let produtoIndex = this.entrada.receberNumero('Opção escolhida: ')
        let produto = this.produtos[produtoIndex]

        if(produto){
            this.produtos.splice(produtoIndex, 1)
            console.log('Produto removido.')
        }
        else{
            console.log('Opção inválida.')
        }
    }
}