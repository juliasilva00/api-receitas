const mongoose = require("mongoose")

const { Schema } = mongoose;

const receitaSchema = new Schema ({
    imagemUrl: {
        required: true,
        type: String
    },
    dificuldade : {
        required: true,
        type: String
    },
    titulo: {
        required: true,
        type: String
    },
    descricao: {
        required: true,
        type: String
    },
    ingredientes: {
        required: true,
        type: Array
    },
    modoDePreparo: {
        required: true,
        type: Array
    }
}, {timestamps: true}) //salva a data de criação do registro e atualização

const Receitas = mongoose.model("Receitas", receitaSchema)

module.exports = {
    Receitas,
    receitaSchema
}