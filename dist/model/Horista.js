"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horista = void 0;
const Empregado_1 = require("./Empregado");
class Horista extends Empregado_1.Empregado {
    constructor(_nome, _cpf, _valorHora, _horasTrabalhadas) {
        super(_nome, _cpf);
        this.valorHora = _valorHora;
        this.horasTrabalhadas = _horasTrabalhadas;
    }
    setValorHora(_valorHora) {
        this.valorHora = _valorHora;
    }
    getValorHora() {
        return this.valorHora;
    }
    setHorasTrabalhadas(_horasTrabalhadas) {
        this.horasTrabalhadas = _horasTrabalhadas;
    }
    getHorasTrabalhadas() {
        return this.horasTrabalhadas;
    }
    vencimento() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
exports.Horista = Horista;
//# sourceMappingURL=Horista.js.map