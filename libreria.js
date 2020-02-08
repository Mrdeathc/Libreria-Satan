const express = require('express'),
    app = express(),
    path = require('path');
cookieParser = require('cookie-parser'), // Middlewares
    cookieSession = require('cookie-session'); // Middlewares

app.use(express.static(path.join(__dirname, '/public')));


// Uso de middlewares

app.use(cookieParser());
app.use(cookieSession({ secret: "Soy un dato de una cookie" }));

app.get('/', (peticion, respuesta) => {

    peticion.session.visitas || (peticion.session.visitas = 0);
    let cookie2 = peticion.session.visitas++
    console.log("numero de sesiones pagina principal: " + cookie2);

    respuesta.sendFile(`${__dirname}/views/index.html`);
});
app.route('/horror').get((peticion, respuesta) => {

    peticion.session.horror1 || (peticion.session.horror1 = 0);
    let cookie = peticion.session.horror1++
    console.log("numero de sesiones pagina horror: " + cookie);

    respuesta.sendFile(`${__dirname}/views/horror.html`)
});
app.route('/psicologico').get((peticion, respuesta) => {

    peticion.session.psyco || (peticion.session.psyco = 0);
    let cookie3 = peticion.session.psyco++
    console.log("numero de sesiones pagina psicologico: " + cookie3);
    respuesta.sendFile(`${__dirname}/views/psicologico.html`)
});
app.route('/suspenso').get((peticion, respuesta) => {
    
    peticion.session.susp || (peticion.session.susp = 0);
    let cookie4 = peticion.session.susp++
    console.log("numero de sesiones pagina de suspenso: " + cookie4);
    respuesta.sendFile(`${__dirname}/views/suspenso.html`)
});
app.route('/contacto').get((peticion, respuesta) => {
    
    peticion.session.cont || (peticion.session.cont = 0);
    let cookie5 = peticion.session.cont++
    console.log("numero de sesiones pagina de contacto: " + cookie5);
    respuesta.sendFile(`${__dirname}/views/contacto.html`)
});

app.route('/busqueda/?').get((peticion, respuesta) => {

    // Validar si los campos del formulario estén vacios
    if (peticion.query.nombre == "horror") {

        respuesta.sendFile(`${__dirname}/views/horror.html`);

    }       else if (peticion.query.nombre == "HORROR") {

        respuesta.sendFile(`${__dirname}/views/horror.html`);

    }
     else if (peticion.query.nombre == "suspenso") {

            respuesta.sendFile(`${__dirname}/views/suspenso.html`);

        } 
       else if (peticion.query.nombre == "psicologico") {

            respuesta.sendFile(`${__dirname}/views/psicologico.html`);

        }
        else if (peticion.query.nombre == "contacto") {

            respuesta.sendFile(`${__dirname}/views/contacto.html`);

        }
        
        else {
            respuesta.sendFile(`${__dirname}/views/error.html`);
        }
    
});

app.listen(8080);
console.log('Ya está listo...')