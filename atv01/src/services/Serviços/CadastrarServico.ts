import Servico from "../../models/Servico";
import Entrada from "../../utils/Entrada";
import Cadastro from "../Cadastro";

export default class CadastrarServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }

    public cadastrar() {
        console.log('\n ========== Cadastrar Serviço ========== ')
        let nome = this.entrada.receberTexto('Nome: ')
        let desc = this.entrada.receberTexto('Descrição: ')
        let valor = this.entrada.receberNumero('Valor: R$')

        let servico = new Servico(nome, desc, valor)

        this.servicos.push(servico)

        console.log('Serviço cadastrado com sucesso!')
    }
}