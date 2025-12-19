const express = require('express');
const app = express()


app.use(express.json())

let list = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(list)
})

app.get('/info', (request, response) => {
    response.send(`
        <p>Phonebook has info about ${list.length > 1 ? list.length + " peoples" : list.length + " people"}.</p>
        <p>${new Date().toLocaleString('pt-BR')} (Brazilian Standart Time).</p>
        `)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = list.find(person => person.id === id)
    
    person ? response.json(person) : response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    const person = list.find(person => person.id === id);

    if (person) {
        list = list.filter(person => person.id !== id);
        response.status(204).end();
    } else {
        response.status(404).end();
    }
})

app.post('/api/persons', (request, response) => {
    const body = request.body;
    const generateRandomId = () => `${Math.random()}${String(Math.random()).split('.')[1]}`

    const newPerson = {
        id: generateRandomId(),
        name: typeof body.name === 'string' ?  body.name : response.status(404).end(),
        number: typeof body.number === 'string' ? body.number : response.status(404).end()
    }

    list = list.concat(newPerson);

    response.json(list)
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port http://localhost:${PORT}`)
