const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');
require('dotenv').config();
const sequelize = require('./config/connection');
// const bcrypt = require('bcrypt');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// app.engine('handlebars',exphbs({
//   extname 'handlebars',
//   defaultLayout: 'index',
//   layoutsDir: __dirname + 'views/layouts',
//   partialsDir: __dirname + 'views/partials',

// }));

// app.get('/', (req,res)=>{
//   res.prependListener("main",{title:"Good Gamez"});
// })

// app.get('/games', (req,res)=>{
//   res.prependListener("main",{title:"Gamez"});
// })
// app.get('/profiles', (req,res)=>{
//   res.prependListener("main",{title:"Profiles"});
// })
// app.get('/support', (req,res)=>{
//   res.prependListener("main",{title:"Support"});
// })
// app.get('/404', (req,res)=>{
//   res.prependListener("main",{title:"Sorry, page not found!"});
// })

