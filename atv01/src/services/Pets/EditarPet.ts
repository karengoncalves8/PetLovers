import Cliente from "../../models/Cliente";
import Entrada from "../../utils/Entrada";
import Editar from "../Editar";

export default class EditarPet extends Editar{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public editar() {
        console.log('========== Editar Pet ==========')
        let cpf = this.entrada.receberTexto('Informe o CPF do dono do pet que deseja editar: ')
        let cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf)

        if(cliente){
            let execucao = true
            
            console.log('Qual pet você deseja editar?')
            let pets = cliente.getPets
    
            if(pets.length > 0){
                pets.forEach((item, index) => {
                    console.log(`${index} - ${item.getNome}`)
                })
            }
            else{
                console.log('Não há nenhum pet cadastrado.')
            }
    
            let petIndex = this.entrada.receberNumero('Opção escolhida: ')
            let pet = pets[petIndex]
    
            if (pet){
                while(execucao){
                    console.log(`Lista de campos editaveis:
                        1- Nome
                        2- Tipo
                        3- Gênero
                        4- Raça
                        0- Voltar
                        `)
                    let opcao = this.entrada.receberNumero('Escolha uma opção: ')
                    switch (opcao){
                        case 1:
                            let novoNome = this.entrada.receberTexto('Novo nome: ')
                            pet.setNome = novoNome
                            console.log('Nome alterado com sucesso!')
                            break
                        case 2:
                            let novoTipo = this.entrada.receberTexto('Novo tipo: ')
                            pet.setTipo = novoTipo
                            console.log('Tipo alterado com sucesso!')
                            break
                        case 3: 
                            let novoGenero = this.entrada.receberTexto('Novo Gênero: ')
                            pet.setGenero = novoGenero
                            console.log('Gênero alterado com sucesso!')
                            break
                        case 4: 
                            let novoRaca = this.entrada.receberTexto('Novo Raça: ')
                            pet.setRaca = novoRaca
                            console.log('Raça alterado com sucesso!')
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
                console.log('Opção inválida.')
            }
        }
        else{ 
            console.log('Nenhum cliente com o CPF informado.')
        }

        
    }
    
}