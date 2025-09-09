import baseError from "./baseError.js";

class requisicaoIncorreta extends baseError {
    constructor() { 
        super("Um ou mais campos estão inválidos ou ausentes", 400);
    }
}

export default requisicaoIncorreta;