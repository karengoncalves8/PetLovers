import CPF from "./CPF"
import Pet from "./Pet"
import Produto from "./Produto"
import RG from "./RG"
import Servico from "./Servico"
import Telefone from "./Telefone"

export default class Cliente{
    public nome: string
    public nomeSocial: string
    private cpf: CPF 
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>

    constructor(nome:string, nomeSocial: string, cpf: CPF){
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.telefones = []
        this.produtosConsumidos = []
        this.pets = []
    }

    public get getCPF(): CPF {
        return this.cpf
    }

    public get getRGs():  Array<RG> {
        return this.rgs
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public get ProdutosConsumidos(): Array<Produto>{
        return this.produtosConsumidos
    }

    public get getServicosConsumidos(): Array<Servico>{
        return this.servicosConsumidos
    }

    public get getPets(): Array<Pet>{
        return this.pets
    }

    public setTelefones(telefone: Telefone){
        this.telefones.push(telefone)
    }

    public setRG(rg: RG){
        this.rgs.push(rg)
    }

    public setPets(pet: Pet){
        this.pets.push(pet)
    }

    public setServicos(servico: Servico){
        this.servicosConsumidos.push(servico)
    }

}