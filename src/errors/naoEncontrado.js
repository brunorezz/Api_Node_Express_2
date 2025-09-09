import baseError from "./baseError.js";

class naoEncontrado extends baseError {
    constructor(mensagem = "Página não encontrada") {
        super(mensagem, 404);
    }
}

export default naoEncontrado;