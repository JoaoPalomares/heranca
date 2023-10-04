import { Assalariado } from "./model/Assalariado";

const a1 = new Assalariado (`Dorival Junior`, `876.223.615-69`, 1500);

a1.setNome(`Rogerio Ceni`);
a1.setCPF(`381.137.132-04`);
a1.setSalario(1320);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCPF()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);