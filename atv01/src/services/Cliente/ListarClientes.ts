import Listagem from "../Listagem";
import Cliente from "../../models/Cliente";

export default class ListarClientes extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar() {
        console.log('\n ========== Clientes cadastrados ========== \n')
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`)
            console.log(`Nome Social: ${cliente.nomeSocial}`)
            console.log(`CPF: ${cliente.getCPF.getValor}`)
            console.log('--------------------------------')
        })
    }
}