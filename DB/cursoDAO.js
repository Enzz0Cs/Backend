import Curso from "../Models/cursos.js";
import connect from "./conexao.js";

export default class CursoDAO {

    async gravar(curso) {
        if (curso instanceof Curso) {
            const conexao = await connect();
            const sql = 'INSERT INTO curso (cur_nome, cur_inicio, cur_descricao, cur_duracao, cur_preco, cur_vagas, cur_nivel, cur_instrutor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const parametros = [
                curso.nome,
                curso.inicio,
                curso.descricao,
                curso.duracao,
                curso.preco,
                curso.vagas,
                curso.nivel,
                curso.instrutor
            ];
            await conexao.execute(sql, parametros)
        }
    }
    async alterar(curso) {
        if (curso instanceof Curso) {
            const conexao = await connect();
            const sql = 'UPDATE curso SET cur_nome=?, cur_inicio=?, cur_descricao=?, cur_duracao=?, cur_preco=?, cur_vagas=?, cur_nivel=?, cur_instrutor=? WHERE cur_id=?';
            const parametros = [
                curso.nome,
                curso.inicio,
                curso.descricao,
                curso.duracao,
                curso.preco,
                curso.vagas,
                curso.nivel,
                curso.instrutor,
                curso.id
            ];
            await conexao.execute(sql, parametros)
            await conexao.release();
        }
    }
    async excluir(curso) {
        if (curso instanceof Curso) {
            const conexao = await connect();
            const sql = 'DELETE FROM curso WHERE cur_id = ?';
            const parametros = [curso.id];

            await conexao.execute(sql, parametros)
            await conexao.release();
        }
    }

    async consultar() {
        const conexao = await connect()
        const sql = 'SELECT * FROM curso ORDER BY cur_id LIMIT 7000'
        const [registros] = await conexao.query(sql);
        await conexao.release();

        let listaCursos = [];
        for (const registro of registros) {
            const curso = new Curso(
                registro.cur_id,
                registro.cur_nome,
                registro.cur_inicio,
                registro.cur_descricao,
                registro.cur_duracao,
                registro.cur_preco,
                registro.cur_vagas,
                registro.cur_nivel,
                registro.cur_instrutor);

            listaCursos.push(curso);

        }
        return listaCursos;
    }
}
