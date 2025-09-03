import Curso from './Models/cursos.js';

const curso = new Curso();

curso.id = 7;
await curso.excluir();
console.log("Curso excluído com sucesso.");