const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/", (req,res) =>{

    res.render('index', {username: 'GAGA1', customer:["B1", "B2", "B3"]})
})

app.listen(PORT, () =>{
    debug("Listening on port "+ chalk.green(("TCP Port : ") + PORT));    // if you found ERR_REQUIRE_ESM you have to https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-
})