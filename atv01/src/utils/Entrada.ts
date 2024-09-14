import promptSync from "prompt-sync";

export default class Entrada{
    
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero  = Number(valor)
        return numero
    }

    public receberTexto(mensagem: string): string{
        let prompt = promptSync();
        let valor = prompt(mensagem)
        return valor
    }
}