import baseError from "./baseError.js";

class requisicaoIncorreta extends baseError {
    constructor(mensagem = "Um ou mais campos estão inválidos ou ausentes") { 
        super(mensagem, 400);
    }
}

export default requisicaoIncorreta;