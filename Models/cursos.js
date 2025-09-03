import CursoDAO from "../DB/cursoDAO.js";

export default class Curso {
    #id
    #nome
    #inicio
    #descricao
    #duracao
    #preco
    #nivel
    #vagas
    #instrutor

    constructor(id = null, nome = "", inicio = '', descricao = "", duracao = "", preco = 0, vagas = 0, nivel = "", instrutor = "") {
        this.#id = id
        this.#nome = nome
        this.#inicio = inicio
        this.#descricao = descricao
        this.#duracao = duracao
        this.#preco = preco
        this.#vagas = vagas
        this.#nivel = nivel
        this.#instrutor = instrutor
    }

    get id() {
        return this.#id

    }
    set id(id) {
        this.#id = id
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    get inicio() {
        return this.#inicio
    }

    set inicio(inicio) {
        this.#inicio = inicio
    }


    get descricao() {
        return this.#descricao
    }

    set descricao(descricao) {
        this.#descricao = descricao
    }

    get duracao() {
        return this.#duracao
    }
    set duracao(duracao) {
        this.#duracao = duracao
    }

    get preco() {
        return this.#preco
    }

    set preco(preco) {
        this.#preco = preco
    }

    get vagas() {
        return this.#vagas
    }

    set vagas(vagas) {
        this.#vagas = vagas
    }

    get nivel() {
        return this.#nivel
    }

    set nivel(nivel) {
        this.#nivel = nivel
    }

    get instrutor() {
        return this.#instrutor
    }

    set instrutor(instrutor) {
        this.#instrutor = instrutor
    }

    toString() {
        return `
        ID: ${this.#id}\n 
        Nome: ${this.#nome}\n
        Inicio: ${this.#inicio}\n
        Descrição: ${this.#descricao}\n 
        Duração: ${this.#duracao}\n
        Preço: ${this.#preco}\n 
        Vagas: ${this.#vagas}\n
        Nível: ${this.#nivel}\n 
        Instrutor: ${this.#instrutor}\n
        `;
    }
    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            inicio: this.#inicio,
            descricao: this.#descricao,
            duracao: this.#duracao,
            preco: this.#preco,
            vagas: this.#vagas,
            nivel: this.#nivel,
            instrutor: this.#instrutor
        }
    }

    async gravar() {
        const cursoDAO = new CursoDAO()
        await cursoDAO.gravar(this)
    }

    async alterar() {
        const cursoDAO = new CursoDAO()
        await cursoDAO.alterar(this)
    }

    async excluir() {
        const cursoDAO = new CursoDAO()
        await cursoDAO.excluir(this)
    }

    async consultar() {
        const cursoDAO = new CursoDAO()
        return await cursoDAO.consultar(this.#id)
    }
}