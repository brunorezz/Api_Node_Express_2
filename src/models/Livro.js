import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { type: String, required: [true, "O título do livro é obrigatório!"] },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true, "Id do autor é obrigatório!"] },
    editora: { type: String, required: [true, "A editora é obrigatório!"] },
    paginas:
    {
      type: Number, validate: {
        validator: (valor) => {
          return valor >= 1 && valor <= 5000;
        }, message: "O número de páginas deve estar entre 1 e 5000."
      },
    }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;