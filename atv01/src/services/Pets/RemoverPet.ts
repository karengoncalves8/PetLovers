import Cliente from "../../models/Cliente"
import Entrada from "../../utils/Entrada"
import Remover from "../Remover"

export default class RemoverPet extends Remover{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public remover() {
        console.log('\n ==========  Remover Pet ========== ')

        let cpf = this.entrada.receberTexto('Informe o CPF do dono do pet que deseja excluir: ')
        let cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf)

        console.log('Qual pet você deseja excluir?')
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
            pets.splice(petIndex, 1)
            console.log('Pet removido.')
        }
        else{
            console.log('Nenhum pet encontrado.')
        }
    }
}