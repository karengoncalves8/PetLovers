import Cliente from "../../models/Cliente";
import RG from "../../models/RG";
import Telefone from "../../models/Telefone";
import Entrada from "../../utils/Entrada";
import Adicionar from "./../Adicionar";

export default class AdicionarCliente extends Adicionar{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public adicionar() {
        console.log('\n ========== Adicionar dados ==========')
        let cpf = this.entrada.receberTexto('Informe o CPF do cliente que deseja adicionar informações: ')
        let cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf)
        let execucao = true

        if (cliente){
            while(execucao){
                console.log(`Adicionar:
                    1- Telefone
                    2- RGs
                    0- Voltar
                    `)
                let opcao = this.entrada.receberNumero('Escolha uma opção: ')
                switch (opcao){
                    case 1:
                        let ddd = this.entrada.receberTexto('DDD: ')
                        let numero = this.entrada.receberTexto('Número: ')

                        let telefone = new Telefone(ddd, numero)

                        cliente.setTelefones(telefone)
                        
                        console.log('Número adicionado!')
                        break
                    case 2:
                        let rgValor = this.entrada.receberTexto('RG: ')
                        let dataEmissao = this.entrada.receberTexto('Data de Emissão do RG (dd/mm/aaaa): ')

                        let dataEmissaoArray = dataEmissao.split('/')
                        let dataEmissaoFormatado = new Date(`${dataEmissaoArray[2]}/${dataEmissaoArray[1]}/${dataEmissaoArray[0]}`)

                        let rg = new RG(rgValor, dataEmissaoFormatado)
                        cliente.setRG(rg)
                        console.log('RG Adicionado!')
                        console.log(cliente)
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
            console.log('Nenhum cliente encontrado com o CPF informado.')
        }
        
    }
    
}