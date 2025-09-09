import mongoose from "mongoose";
import baseError from "../errors/baseError.js";
import requisicaoIncorreta from "../errors/requisicaoIncorreta.js";
import erroValidacao from "../errors/erroValidacao.js";
import naoEncontrado from "../errors/naoEncontrado.js";

function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new requisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new erroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof naoEncontrado) {
    erro.enviarResposta(res);
  }
  else {
    new baseError().enviarResposta(res);
  }
};

export default manipuladorDeErros