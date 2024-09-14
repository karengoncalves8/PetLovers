import Produto from "../../models/Produto";
import Entrada from "../../utils/Entrada";
import Cadastro from "../Cadastro";

export default class CadastrarProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public cadastrar() {
        console.log('\n ========== Cadastrar Produto ========== ')
        let nome = this.entrada.receberTexto('Nome: ')
        let desc = this.entrada.receberTexto('Descrição: ')
        let valor = this.entrada.receberNumero('Valor: R$')

        let produto = new Produto(nome, desc, valor)

        this.produtos.push(produto)

        console.log('Produto cadastrado com sucesso!')
    }

}