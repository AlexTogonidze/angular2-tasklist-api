var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');



var index = require('./routes/index');

var tasks = require('./routes/tasks');


var app = express();


//View engine 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder

app.use(express.static(path.join(__dirname, 'client')));

//Body parser 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index );
app.use('/api', tasks );

app.listen(3000 , function(){

    console.log('server has started on port 3000');

});
