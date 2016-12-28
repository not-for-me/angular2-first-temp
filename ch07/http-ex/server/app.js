const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const PORT_NUM = 3000;

const IN_MEMORY_DB = [
    { no: 1, id: 'jwj0831', name: 'Woojin', age: 32 },
    { no: 2, id: 'shim', name: 'Kiljue', age: 30 },
    { no: 3, id: 'lee', name: 'Kiljue', age: 38 }
];

app.get('/api/users/nos', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    return res.send(IN_MEMORY_DB.map(user => user.no));
});

app.get('/api/users/:userNo', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    const userNo = Number.parseInt(req.params.userNo);
    console.log(`userNo: ${userNo}`);

    const searchResult = IN_MEMORY_DB.filter(user => user.no === userNo);
    if (searchResult.length === 1) {
        return res.send(searchResult[0]);
    } 
    
    return res.status(404).send('no user');
});

 app.get('/api/text', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    res.set('Content-Type', 'text/plain');
    return res.send('test data');
});

app.post('/api/users', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);

    const newNo = IN_MEMORY_DB.length + 1;
    console.log(`create a new user no: ${newNo}`);
    const newUser = req.body;
    newUser.no = newNo;
    console.log(`created user: ${JSON.stringify(newUser)}`);

    IN_MEMORY_DB.push(newUser);
    return res.send(newUser);
});

app.listen(PORT_NUM, () => console.log(`start to listening on port ${PORT_NUM}`))