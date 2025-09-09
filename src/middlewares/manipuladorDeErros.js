import mongoose from "mongoose";
import baseError from "../errors/baseError.js";

function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new requisicaoIncorreta().enviarResposta(res);
  } else if( erro instanceof mongoose.Error.ValidationError ) {
    
    const mensagensErro = Object.values(erro.errors)
    .map(erro => erro.message)
    .join("; ");

    res.status(400).send({message: `Os seguintes erros foram encontrados: ${mensagensErro}`})

  } else {
    new baseError().enviarResposta(res);
  }
};

export default manipuladorDeErros