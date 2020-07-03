const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'Now this is version 3 with auto deployment of the app.' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server still listening on port 8080...');
});
