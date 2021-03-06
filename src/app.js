const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./rotes/index');
const userRoute = require('./rotes/Users');
const loginRoute = require('./rotes/login');
const enderecoRoute = require('./rotes/endereco');
const hospitalRoute = require('./rotes/hospital');
const enderecoCobertoRoute = require('./rotes/enderecoCoberto');
const regiaoRoute = require('./rotes/descobertos');
const telefoneRoute = require('./rotes/telefones');
const infoRoute = require('./rotes/info');
const rouleRoute = require('./rotes/roles');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors({origin: true, credentials: true}));
app.use(index);
app.use('/api/', userRoute);
app.use('/api/', loginRoute);
app.use('/api/', enderecoRoute);
app.use('/api/', hospitalRoute);
app.use('/api/', enderecoCobertoRoute);
app.use('/api/', regiaoRoute);
app.use('/api/', telefoneRoute);
app.use('/api/', infoRoute);
app.use('/api/', rouleRoute);

module.exports = app;
