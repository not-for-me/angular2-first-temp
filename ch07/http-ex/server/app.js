const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const PORT_NUM = 3000;

/**
 * 테스트용 사용자 배열 객체
 */
let IN_MEMORY_USER_DB = [
    { no: 1, id: 'jwj0831', name: 'Woojin', age: 32 },
    { no: 2, id: 'kiljulee', name: 'Kilju', age: 37 },
    { no: 3, id: 'coffeenjava', name: 'Jisu', age: 37 },
    { no: 4, id: 'dsboo', name: 'Dongsig', age: 34 }
];


/**
 * 전체 사용자 no 조회
 */
app.get('/api/users/nos', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    if (IN_MEMORY_USER_DB.length === 0) {
        return res.status(404).send('등록된 사용자가 없습니다.');
    }
    return res.send(IN_MEMORY_USER_DB.map(user => user.no));
});

/**
 * 사용자 no로 조회
 */
app.get('/api/users/:userNo', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    const userNo = Number.parseInt(req.params.userNo);
    console.log(`userNo: ${userNo}`);

    const searchResult = IN_MEMORY_USER_DB.filter(user => user.no === userNo);
    if (searchResult.length === 1) {
        return res.send(searchResult[0]);
    }

    return res.status(404).send(`no: ${userNo}에 해당하는 사용자가 없습니다.`);
});

/**
 * 사용자 업로드
 */
app.post('/api/users', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);

    const newNo = IN_MEMORY_USER_DB.length + 1;
    console.log(`create a new user no: ${newNo}`);
    const newUser = req.body;
    newUser.no = newNo;
    console.log(`created user: ${JSON.stringify(newUser)}`);

    IN_MEMORY_USER_DB.push(newUser);
    return res.send(newUser);
});

app.delete('/api/users', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    IN_MEMORY_USER_DB = [];
    return res.send('clear');
});

app.post('/api/users/test', (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    console.log(`params: ${JSON.stringify(req.body)}`);
    return res.send('ok');
});

app.listen(PORT_NUM, () => console.log(`start to listening on port ${PORT_NUM}`))