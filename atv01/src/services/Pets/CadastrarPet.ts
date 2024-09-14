import Cliente from "../../models/Cliente";
import Pet from "../../models/Pet";
import Entrada from "../../utils/Entrada";
import Cadastro from "../Cadastro";

export default class CadastrarPet extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public cadastrar() {
        console.log('\n ==========  Cadastro de Pets ==========  ')

        let nome = this.entrada.receberTexto('Nome: ')
        let tipo = this.entrada.receberTexto('Tipo: ')
        let genero = this.entrada.receberTexto('Gênero: ')
        let raca = this.entrada.receberTexto('Raça: ')

        let pet = new Pet(nome, tipo, genero, raca)

        let cpf = this.entrada.receberTexto('Informe o CPF do dono: ')

        let cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf)

        cliente.setPets(pet)
    }
    
}