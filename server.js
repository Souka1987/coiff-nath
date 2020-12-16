// Import de module
const
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    // Lien avec la base de données
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    //mongoStore = require('connect-mongo'),
    //MongoStore = mongoStore(session),
    // Handlebars sert à créer des modèles de pages web réutilisables
    hbs = require('express-handlebars')
//mongoStore = require('connect-mongo'),

//ENV
require('dotenv').config()
//console.log(process.env);

// Morgan => Middleware de journalisation des requêtes HTTP pour node.js
app.use(morgan('dev'))

/* L'entête Access-Control-Allow-Origin renvoie une réponse indiquant 
si les ressources peuvent être partagées avec une origine donnée.*/
app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.header('origin'))
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// Cors
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

// Body parser permet de parser les data d'une page à l'autre en passant par les controllers, ... 
// Parser = https://fr.wiktionary.org/wiki/parser
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.urlencoded({
    extended: true
}))

// Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    layouts: 'main',
}));

// Mongoose pour le lien avec la base de données. "coiff'nath" est le nom de la base de données.
mongoose
    .connect(process.env.MONGO_URI, { // URI = chemin
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.log(err));


// Port
port = process.env.PORT || 5000;


// Notre router permettra de diriger des chemins 'URL' sur les actions 'Controller' qui distriburont nos pages, ... 
// CRUD = GET / POST / PUT / DELETE
const ROUTER = require('./api/router')
app.use('/api', ROUTER)


// Ensuite nous demandons a express (app) de run notre projet.
app.listen(port, function () {
    console.log(`Ecoute le port ${port}, lancé le : ${new Date().toLocaleString()}`);
})