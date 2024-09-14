export default class Telefone{
    private ddd: string
    private numero: string

    constructor(ddd:string, numero: string){
        this.ddd = ddd,
        this.numero = numero
    }

    public get getDDD(): string{
        return this.ddd
    }

    public get getNumero(): string{
        return this.numero
    }

    public get getTelefone(): string{
        return `(${this.ddd}) ${this.numero}`
    }

    public set setDDD(ddd){
        this.ddd = ddd
    }

    public set setNumero(numero){
        this.numero = numero
    }
}