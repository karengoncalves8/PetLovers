export default class Servico{
    public nome: string
    public descricao: string
    private valor: number

    constructor(nome: string, descricao: string, valor: number){
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
    }

    public get getValor(): Number{
        return this.valor
    }

    public set setValor(valor: number){
        this.valor = valor
    }
}