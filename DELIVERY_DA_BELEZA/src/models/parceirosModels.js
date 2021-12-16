const mongoose = require('mongoose');

const parceiroSchema = new mongoose.Schema({
    
   aceitoTermoDeUsoDeDados : {
        type: Boolean,
        default: false
    },
    nome: { type: String },
    cpf: {
        type: String, // atenção! CPF nunca é tipo número, sempre string (:
        required: true
    },
    email: { type: String },

    telefone:{ type: String },

    profissão:{ type: String },

    serviço: { type: String },

    valorServiço:{type: String},
    
    password: { type: String },
    
},{
    versionKey: false
});

const parceiros = mongoose.model('parceiros', parceiroSchema);

module.exports = parceiros;