import Curso from './Models/cursos.js';

const curso = new Curso(null, 'Impressão 3d', '10/11/2025', 'teste', '1 Mês', 750.00, 6, 'Médio', 'Eduardo Campos');

await curso.gravar();
console.log("Curso gravada com sucesso.");

console.log(curso.toString());