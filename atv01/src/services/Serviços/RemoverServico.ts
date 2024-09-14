import Servico from "../../models/Servico";
import Entrada from "../../utils/Entrada";
import Remover from "../Remover";

export default class RemoverServico extends Remover{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }

    public remover(){
        console.log('\n ========== Remover Serviço ========== ')

        console.log('Escolha um serviço para excluir:')
        this.servicos.forEach((item, index) => {
            console.log(`${index} - ${item.nome}`)
        })

        let servicoIndex = this.entrada.receberNumero('Opção escolhida: ')
        let servico = this.servicos[servicoIndex]

        if(servico){
            this.servicos.splice(servicoIndex, 1)
            console.log('Serviço removido.')
        }
        else{
            console.log('Opção inválida.')
        }
    }

}