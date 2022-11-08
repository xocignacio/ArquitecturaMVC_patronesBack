import express from 'express';
import handlebars from 'express-handlebars';
/* import viewsRouter from './router/views.router.js' */
import viewsRouter from './router/views.router.js'
import usersRouter from './router/users.router.js'
const app = express();
import __dirname from './utils.js'

app.use(express.json());
/////////// Lineas para utilizar handlebars ///////////////////
app.engine('handlebars',handlebars.engine());    
app.set('views',__dirname+'/views');                  ////dirname es la ruta absoluta (utils)
app.set('view engine','handlebars');

app.use ('/', viewsRouter); 
app.use ('api/users', usersRouter);

const server = app.listen (8080, () => console.log('server escuchando '));