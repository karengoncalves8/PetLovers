import Cliente from "./Cliente";
import Produto from "./Produto";
import Servico from "./Servico";

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }

    public get getClientes(){
        return this.clientes
    }

    public get getProdutos(){
        return this.produtos
    }

    public get getServicos(){
        return this.servicos
    }
}