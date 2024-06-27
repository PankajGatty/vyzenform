const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let PORT =5001

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use(cors({
  credentials : true,
  origin: ['http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002']
}))

app.use(express.static('public'));
app.use(express.json());

app.use('/api',require('./routes/router'));

app.listen(PORT,function (){
  console.log('Example app listening on port',PORT);
});