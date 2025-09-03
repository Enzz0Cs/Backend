import Curso from './Models/cursos.js';

const curso = new Curso(8, 'Impressão 3d', '10/11/2025', 'teste', '1 Mês', 750.00, 6, 'Médio', 'Eduardo Campos');

curso.preco = 1000;
await curso.alterar();
console.log("Curso alterado com sucesso.");

console.log(curso.toString());