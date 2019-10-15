const express = require('express');

//process json data easily
const bodyParser = require('body-parser');
const cors = require('cors');

//printing out logs
const morgan = require('morgan');

//is building an express server
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered, have fun!`
    })
})

app.listen(port, () => console.log(`Server running at on port:${port}!`));