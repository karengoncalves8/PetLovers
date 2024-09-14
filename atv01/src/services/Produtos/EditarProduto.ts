import Produto from "../../models/Produto"
import Entrada from "../../utils/Entrada"
import Editar from "../Editar"

export default class EditarProduto extends Editar{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public editar(){
        console.log('\n ========== Editar Produto ========== ')

        console.log('Escolha um produto para editar:')
        if(this.produtos.length > 0){
            this.produtos.forEach((item, index) => {
                console.log(`${index} - ${item.nome}`)
            })
        } 
        else{
            console.log('Não há produtos cadastrados.')
        }

        let produtoIndex = this.entrada.receberNumero('Opção escolhida: ')
        let produto = this.produtos[produtoIndex]

        if(produto){
            let execucao = true
            while(execucao){
                console.log(`Lista de campos editaveis:
                    1- Nome
                    2- Descrição
                    3- Valor
                    0- Voltar
                    `)
                let opcao = this.entrada.receberNumero('Escolha uma opção: ')
                switch (opcao){
                    case 1:
                        let novoNome = this.entrada.receberTexto('Novo nome: ')
                        produto.nome = novoNome
                        console.log('Nome alterado com sucesso!')
                        break
                    case 2:
                        let novaDesc = this.entrada.receberTexto('Novo descrição: ')
                        produto.descricao = novaDesc
                        console.log('Descrição alterado com sucesso!')
                        break
                    case 3: 
                        let novoValor = this.entrada.receberNumero('Novo Valor: ')
                        produto.setValor = novoValor
                        console.log('Valor alterado com sucesso!')
                        break
                    case 0: 
                        execucao = false
                        break
                    default:
                        console.log('Opção inválida.')
                }
            }
        }
        else{
            console.log('Opção inválida')
        }
    }
}