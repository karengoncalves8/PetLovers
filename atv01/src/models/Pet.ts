export default class Pet{
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor (nome: string, tipo: string, genero: string, raca: string){
        this.nome = nome,
        this.tipo = tipo,
        this.genero = genero
        this.raca = raca
    }

    public get getNome(): string{
        return this.nome
    }

    public get getRaca(): string{
       return this.raca
    }

    public get getGenero(): string{
        return this.genero
    }

    public get getTipo(): string{
        return this.tipo
    }

    public set setNome(nome: string){
        this.nome = nome
    }

    public set setRaca(raca: string){
        this.raca = raca
    }

    public set setGenero(genero: string){
        this.genero = genero
    }

    public set setTipo(tipo: string){
        this.tipo = tipo
    }
}