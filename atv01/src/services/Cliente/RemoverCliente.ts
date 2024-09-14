import Cliente from "../../models/Cliente"
import Entrada from "../../utils/Entrada"
import Remover from "./../Remover"

export default class RemoverCliente extends Remover{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public remover() {
        console.log('\n ==========  Remover Cliente ========== ')

        let cpf = this.entrada.receberTexto('Informe o CPF do cliente que deseja excluir: ')
        let clienteIndex = this.clientes.findIndex(cliente => cliente.getCPF.getValor == cpf)

        if (clienteIndex !== -1){
            this.clientes.splice(clienteIndex, 1)
            console.log('Cliente removido.')
        }
        else{
            console.log('Nenhum cliente encontrado com o CPF informado.')
        }
    }
}