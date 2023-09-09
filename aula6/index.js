// + - * /
const nome = 'Patrick';
const sobrenome = 'Alquimim';
const idade = 19;
const peso = 60;
const alturaEmM = 1.70;
let imc; //peso (altura * altura)
let anoNascimento; 

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2023 - idade;

console.log(nome,sobrenome,'tem',idade,'anos','pesa',peso,'kg');
console.log('tem',alturaEmM,'de altura e seu IMC é de', imc);
