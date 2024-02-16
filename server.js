const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
require('dotenv').config();
const sequelize = require('./config/connection');



// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });


// const sess = {
//     secret: process.env.SECRET,
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
// };

// app.use(session(sess));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



  app.get('/main', (req, res) => {
    res.render('main');
    // render your contact.handlebars
  })

    app.get('/games', (req, res) => {
      res.render('games');
      // render your contact.handlebars
    })

    app.get('/profiles', (req, res) => {
      res.render('profiles');
      // render your contact.handlebars
    })

app.get('/support', (req, res) => {
  res.render('support');
  // render your contact.handlebars
})

  app.get('/404', (req, res) => {
    res.render('404');
    // render your contact.handlebars
  })

    app.get('/login', (req, res) => {
      res.render('login');
      // render your contact.handlebars
    })

    app.get('/register', (req, res) => {
      res.render('register');
      // render your contact.handlebars
    })