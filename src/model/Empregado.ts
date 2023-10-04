export abstract class Empregado {
    private nome: string;
    private cpf: string;

    constructor(_nome: string, _cpf: string){
        this.nome = _nome;
        this.cpf = _cpf;
    }

    public setNome(_nome: string):void{
        this.nome = _nome;
    }

    public getNome(){
        return this.nome;
    }

    public setCPF(_cpf: string):void{
        this.cpf = _cpf;
    }

    public getCPF(){
        return this.cpf;
    }

    public abstract vencimento(): number;
}