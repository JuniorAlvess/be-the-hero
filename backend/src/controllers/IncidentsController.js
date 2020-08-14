// conexão com o bd
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        // Listagem de paginação

        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();// passando a quantidade de casos para o front

        const incidents = await connection('incidents')
            //ralacionando dados de uma tabela
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            // limite por pagina
            .limit(5)
            .offset((page - 1) * 5)
            // buscando dados das ongs 
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

            response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    // cadastrar incidentes
    async create(request, response) {
        const {title, description, value} = request.body;
        // autenticação do usuario
        const ong_id = request.headers.authorization;

        // inserindo nota
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id })
    },

    // deletar incidents
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization; // verificar se o id que esta sendo deletado é realmente da ong


        const incident = await connection('incidents')

            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            // resposta 401 = não autorizado
            return response.status(401).json({ error: 'operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        // resposta 204 = sem conteudo
        return response.status(204).send();

    }
};