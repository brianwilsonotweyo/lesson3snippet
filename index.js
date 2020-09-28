const express = require('express');
var app = express ()
app.use(express.static('public'));
var port = process.env.PORT || 5050;

var server = app.listen(port, () => {
    console.log(`Server started on port: `+port);
});