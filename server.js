require('babel-register')({
    presets: ['react', 'es2015']
});
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(request,response){
	response.sendFile(__dirname + "./static/index.html");
});


app.listen(3000, function() {
    console.log('Listening at port 3000');
});
