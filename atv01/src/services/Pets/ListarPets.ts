import Listagem from "../Listagem";
import Cliente from "../../models/Cliente";
import Entrada from "../../utils/Entrada";

export default class ListarPets extends Listagem{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar() {
        console.log('\n ========== Listar Pets ========== \n')
        let cpf = this.entrada.receberTexto('CPF do cliente que deseja listar os pets: ')
        let cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf)

        console.log(`Pets de ${cliente.nome}`)
        cliente.getPets.forEach(pet => {
            console.log(`Nome: ${pet.getNome}`)
            console.log(`Tipo: ${pet.getTipo}`)
            console.log(`Gênero: ${pet.getGenero}`)
            console.log(`Raça: ${pet.getRaca}`)
            console.log('--------------------------------')
        })
    }
}