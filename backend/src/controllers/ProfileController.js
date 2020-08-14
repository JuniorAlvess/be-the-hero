const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        // acessando os dados da ong logada
        const ong_id = request.headers.authorization;

        // buscando os incidents desta mesmas ong
        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
    }
}