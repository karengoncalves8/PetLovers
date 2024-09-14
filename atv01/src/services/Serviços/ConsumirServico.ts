import Cliente from "../../models/Cliente";
import Servico from "../../models/Servico";
import Entrada from "../../utils/Entrada";
import Consumir from "../Consumir";

export default class ConsumirServico extends Consumir{
    private servicos: Array<Servico>
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(servicos: Array<Servico>, clientes: Array<Cliente>){
        super()
        this.servicos = servicos
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public consumir(){
        console.log('\n ========== Consumir Serviço ========== ')

        let cpf = this.entrada.receberTexto('Por favor insira o CPF do cliente que irá consumir: ')
        let cliente = this.clientes.find(cliente => cliente.getCPF.getValor == cpf)

        if(cliente){
            console.log('Escolha um serviço para consumir:')
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
                cliente.setServicos(servico)
                console.log('Serviço consumido!')
            }
            else{
                console.log('Opção inválida.')
            }
        }
        else{
            console.log('Nenhum cliente encontrado com o CPF informado.')
        }

    }
}