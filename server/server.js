const express = require('express');
const path    = require('path') ;
const config  = require('./config');

const app = express();

app.use(express.static(path.join(__dirname, config.basePath)));
app.use('*', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, config.basePath, 'index.html'));
});

app.listen(config.port, () => {
    console.log('listening port ', config.port);
});
