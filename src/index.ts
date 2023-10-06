import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado (`Dorival Junior`, `876.223.615-69`, 1500);
const c1 = new Comissionado (`Jonas`, `184.362.114-21`, 231, 15);
const h1 = new Horista (`Renato`, `050.727.438-53`, 40, 8);

a1.setNome(`Rogerio Ceni`);
a1.setCPF(`381.137.132-04`);
a1.setSalario(1320);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCPF()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

console.log("\n");

c1.setNome(`Neymar`);
c1.setCPF(`644.384.893-42`);
c1.setTaxaComissao(20);
c1.setTotalVendas(231);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCPF()}`);
console.log(`Taxa de Comissão: ${c1.getTaxaComissao()}, Total de Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

console.log("\n");

h1.setNome(`Miroslav`);
h1.setCPF(`776.582.520-85`);
h1.setValorHora(40);
h1.setHorasTrabalhadas(8);
console.log(`Nome: ${h1.getNome()}, CPF: ${h1.getCPF()}`);
console.log(`Valor da Hora: ${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);