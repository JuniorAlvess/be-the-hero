const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        // verificando se a ong realmente existe
        const { id } = request.body;

        // buscando ong do bd
        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        // se a ong não existir
        if (!ong) {
            // resposta 400 = algo deu errado
            return response.status(400).json({ error: 'No ONG found with this ID'});;
        }
        // retornando os dandos da ong
        return response.json(ong);
    }
}