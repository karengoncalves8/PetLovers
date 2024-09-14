import Cliente from "../../models/Cliente";
import Telefone from "../../models/Telefone";
import Entrada from "../../utils/Entrada";
import Editar from "./../Editar";

export default class EditarCliente extends Editar{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public editar() {
        console.log('========== Editar Cliente ==========')
        let cpf = this.entrada.receberTexto('Informe o CPF do cliente que deseja alterar: ')
        let cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf)
        let execucao = true

        if (cliente){
            while(execucao){
                console.log(`Lista de campos editaveis:
                    1- Nome
                    2- Nome Social
                    3- Telefone
                    0- Voltar
                    `)
                let opcao = this.entrada.receberNumero('Escolha uma opção: ')
                switch (opcao){
                    case 1:
                        let novoNome = this.entrada.receberTexto('Novo nome: ')
                        cliente.nome = novoNome
                        console.log('Nome alterado com sucesso!')
                        break
                    case 2:
                        let novoNomeSocial = this.entrada.receberTexto('Novo nome social: ')
                        cliente.nomeSocial = novoNomeSocial
                        console.log('Nome social alterado com sucesso!')
                        break
                    case 3: 
                        console.log('Qual telefone você deseja alterar?')
                        let telefones = cliente.getTelefones

                        if(telefones.length > 0){
                            telefones.forEach((item, index) => {
                                console.log(`${index} - ${item.getTelefone}`)
                            })
                        }
                        else{
                            console.log('Não há nenhum telefone cadastrado.')
                        }

                        let telefoneIndex = this.entrada.receberNumero('Opção escolhida: ')
                        let novoDDD = this.entrada.receberTexto('Novo DDD: ')
                        let novoNumero = this.entrada.receberTexto('Novo Número: ')

                        let novoTelefone = telefones[telefoneIndex]
                        
                        if (novoTelefone){
                            novoTelefone.setDDD = novoDDD
                            novoTelefone.setNumero = novoNumero
                        }
                        else{
                            console.log('Opção inválida')
                        }

                        console.log('Telefone alterado com sucesso!')
                        break
                    case 0: 
                        execucao = false
                        break
                    default:
                        'Opção inválida.'

                }
            }
        }
        else{
            console.log('Nenhum cliente encontrado com o CPF informado.')
        }
        
    }
    
}