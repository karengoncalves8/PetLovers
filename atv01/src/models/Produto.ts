export default class Produto{
    public nome: String
    public descricao: String
    private valor: Number

    constructor(nome: String, descricao: String, valor: Number){
        this.nome = nome,
        this.descricao = descricao
        this.valor = valor
    }

    public get getValor(){
        return this.valor
    }

    public set setValor(valor: Number){
        this.valor = valor
    }
}