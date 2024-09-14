import Servico from "../../models/Servico";
import Entrada from "../../utils/Entrada";
import Editar from "../Editar";

export default class EditarServico extends Editar{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }

    public editar(){
        console.log('\n ========== Editar Serviço ========== ')

        console.log('Escolha um serviço para editar:')
        if(this.servicos.length > 0){
            this.servicos.forEach((item, index) => {
                console.log(`${index} - ${item.nome}`)
            })
        }
        else{
            console.log('Não há serviços cadastrados.')
        }


        let servicoIndex = this.entrada.receberNumero('Opção escolhida: ')
        let servico = this.servicos[servicoIndex]

        if(servico){
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
                        servico.nome = novoNome
                        console.log('Nome alterado com sucesso!')
                        break
                    case 2:
                        let novaDesc = this.entrada.receberTexto('Novo descrição: ')
                        servico.descricao = novaDesc
                        console.log('Descrição alterado com sucesso!')
                        break
                    case 3: 
                        let novoValor = this.entrada.receberNumero('Novo Valor: ')
                        servico.setValor = novoValor
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