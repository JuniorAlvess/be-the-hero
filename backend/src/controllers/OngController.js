// criptografia
const crypto = require('crypto');
// conexão com o bd
const connection = require('../database/connection');

module.exports = {
    // Listar todas as ongs do banco de dados
    async index(request, response) {
            const ongs = await connection('ongs').select('*');
        
            return response.json(ongs);
        },

    // criação das ongs
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};