const mongoose = require('mongoose');
//modelos de sapato: nomes, tamanhos e marcas.
const shoeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A shoe must have a name"],
        unique: true
        //o nome tem que ser unico porque nao pode ter tenis com dois nomes iguais
    },
    size: {
        type: String,
        required: [true, "A shoe must have a size"]
        // precisa do required porque o tenis deve ter um tamanho definido
    },
    brand: {
        type: String,
        required: [true, "A shoe must have a brand"]
        // precisa do required porque o tenis deve ter uma marca definida, nao pode ficar avulso
    },
})

const Shoe = mongoose.model("Shoe", shoeSchema, "Calcados");

module.exports = Shoe;
