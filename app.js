const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3002;

app.use(morgan('combined'));

app.get("/", (req,res) =>{

    res.send(' HELLO  NODE JS PROJECT1');
})

app.listen(port, () =>{
    debug("Listening on port "+ chalk.green(("TCP Port : ") + port));    // if you found ERR_REQUIRE_ESM you have to https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-
})