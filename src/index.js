const express = require('express'); // importando express

const app = express(); // chamando função do express

app.use(express.json())
app.get('/courses', (request, response) => {
    //um dos parametros do método é o path e o outro é a função que tem request e response
    const query = request.query;
    console.log(query)
    return response.json([
        'curso 1',
        'curso 2',
        'curso 3'
    ]); // geralmente se usa json para retornar dados (json pode retornar objeto, arrays etc)
});

app.post('/courses', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json([
        'curso 1',
        'curso 2',
        'curso 3',
        'curso 4'
    ]); 
});

app.put('/courses/:id', (request, response) => {
    const params = request.params;
    console.log(params)
    return response.json([
        'curso 6',
        'curso 2',
        'curso 3',
        'curso 4'
    ]); 
});

app.patch('/courses/:id', (request, response) => {
    return response.json([
        'curso 1',
        'curso 2',
        'curso 3',
        'curso 4'
    ]); 
});

app.delete('/courses/:id', (request, response) => {
    return response.json([
        'curso 1',
        'curso 2',
        'curso 4'
    ]); 
});

app.listen(3333); // pedindo pro express startar a aplicação no localhost:3333