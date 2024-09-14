import Servico from "../../models/Servico";
import Listagem from "../Listagem";

export default class ListarServicos extends Listagem{
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }

    public listar() {
        console.log('\n ========== Listar Serviços ========== ')

        this.servicos.forEach((item) => {
            console.log(`Nome: ${item.nome}`)
            console.log(`Descrição: ${item.descricao}`)
            console.log(`Valor: R$${item.getValor}`)
            console.log('--------------------------------')
        })
        
    }

}