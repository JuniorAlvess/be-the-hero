const express = require('express');
// criptografia
const crypto = require('crypto');
// desaclopando o modulo de rotas do express em uma nova variavel
const routes = express.Router();

// importando conexão com o bd
const connection = require('./database/connection')
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


// criando rota

// Testando criação do bd
//listagem de ongs
// routes.get('/ongs', async(request, response) => {
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);
// });

// cadastro de ongs
// routes.post('/ongs', async (request, response) => {
//     const { name, email, whatsapp, city, uf} = request.body;

    // criando id 
    // GERA 4 BYTES DE CARACTERES HEXADECIMAIS
//     const id = crypto.randomBytes(4).toString('HEX')

//     await connection('ongs').insert({
//         id,
//         name,
//         email,
//         whatsapp,
//         city,
//         uf
//     })

//     return response.json({ id });
// });
// FIM DO TESTE


routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

// deixando as rotas disponiveis para que o index possa acessá-las
module.exports = routes;