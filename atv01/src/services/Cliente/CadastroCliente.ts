import Cadastro from "../Cadastro";
import Cliente from "../../models/Cliente";
import CPF from "../../models/CPF";
import Entrada from "../../utils/Entrada";

export default class CadastroCliente extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public cadastrar() {
        console.log('\n ========== Cadastrar Cliente ========== ')
        let nome = this.entrada.receberTexto('Nome: ')
        let nomeSocial = this.entrada.receberTexto('Nome social: ')
        let cpf = this.entrada.receberTexto('CPF: ')
        let dataEmissaoCPF = this.entrada.receberTexto('Data de Emissão do CPF (dd/mm/aaaa): ')

        let dataEmissaoArray = dataEmissaoCPF.split('/')
        let dataEmissaoFormatado = new Date(`${dataEmissaoArray[2]}/${dataEmissaoArray[1]}/${dataEmissaoArray[0]}`)

        let cpfFormatado = new CPF(cpf, dataEmissaoFormatado)
        let cliente = new Cliente(nome, nomeSocial, cpfFormatado)

        this.clientes.push(cliente)
        console.log('Cliente cadastrado com sucesso!')
    }
    
}