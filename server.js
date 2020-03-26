const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

// handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets (production)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
};

// importing nodemail routes
require('./nodemailer.js')(app);

app.post('/api/form', (request, response) => {
    console.log(request.body)
});

// sending errors for posts that are not nodemailer related
app.delete('*', (request, response) => {
    response
        .status(404)
        .send('Unable to locate resource')
});

app.post('*', (request, response) => {
    response
        .status(404)
        .send('Unable to locate resource')
});

app.put('*', (request, response) => {
    response
        .status(404)
        .send('Unable to locate resource')
});

app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`)
});