const mongoose = require('mongoose');


const parceiroSchema = new mongoose.Schema({

   aceitoTermoDeUsoDeDados : {
        type: Boolean,
        default: false
    },
    name: { type: String },
    cpf: {
        type: Number,
        required: true
    },
    email: { type: String },
    telefone:{ type: String },
    Profissão:{ type: String },
    serviço: { type: String },

 
    
    password: { type: String },
    
},{
    versionKey: false
});

const parceiros = mongoose.model('parceiros', parceiroSchema);

module.exports = parceiros;