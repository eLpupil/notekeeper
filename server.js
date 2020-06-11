const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.static(__dirname + '/build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})



let port = process.env.PORT || '3000';

app.listen(port, err => {
    if (!err) {
        console.log(`Listening on port ${port}`);
    } else {
        console.log(err);
    }
})
