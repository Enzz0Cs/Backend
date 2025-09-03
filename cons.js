import Curso from './Models/cursos.js';

const curso = new Curso();

const listaDeCursos = await curso.consultar();

for (const cur of listaDeCursos) {
    console.log(cur.toJSON());
}