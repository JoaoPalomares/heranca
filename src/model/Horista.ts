import { Empregado } from "./Empregado";

export class Horista extends Empregado{
    private valorHora: number;
    private horasTrabalhadas: number;

    public constructor(_nome: string, _cpf: string, _valorHora: number, _horasTrabalhadas: number){
        super(_nome, _cpf);
        this.valorHora = _valorHora;
        this.horasTrabalhadas = _horasTrabalhadas;
    }

    public setValorHora(_valorHora: number){
        this.valorHora = _valorHora;
    }

    public getValorHora(){
        return this.valorHora;
    }

    public setHorasTrabalhadas(_horasTrabalhadas: number){
        this.horasTrabalhadas = _horasTrabalhadas;
    }

    public getHorasTrabalhadas(){
        return this.horasTrabalhadas;
    }

    public vencimento(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}