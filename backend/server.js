const express = require('express');
const path = require('path');
const app = express();

const PORT = 80;


app.listen(PORT, function () {
    console.log('서버 실행중..');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/','index.html'));
    
    console.log('get실행중..', req.url);
});

app.use((req, res, next) => {
    console.log('request', req.url);
    next();
});

app.use(express.static(path.join(__dirname, '../frontend')));


