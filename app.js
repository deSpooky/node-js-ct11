import express from 'express';
import handlebars from 'express-handlebars';
import hbs from 'hbs';

const app = express()

const helpers = {
    getTime: () => {
        return `Текущее время ${new Date().toLocaleTimeString()}`
    },
    uppercase: (text) => {
        return text.toUpperCase() + '!'
    }
}

hbs.registerPartials(import.meta.dirname + '/views/partials')

app.engine('hbs', handlebars.engine({
    defaultLayout: 'global',
    layoutsDir: import.meta.dirname + '/views/layouts',
    partialsDir: import.meta.dirname + '/views/partials',
    extname: 'hbs',
    helpers 
}))

app.set('view engine', 'hbs')

app.get('/', (_, response) =>{
    response.render('index', {
        content: 'Spooky HBS',
        isEmailVisible: true,
        emails: ['user@example', 'admin@example']
    })
})

app.listen(3000)