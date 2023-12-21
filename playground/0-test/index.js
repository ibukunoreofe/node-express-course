const express = require('express');
const apiRoutes = require('./routes/api')
const { requestLogger } = require('./middlewares/log-request-path')

const app = express();
const port = 3000;

// parse json
app.use(express.json())

// parse form data
app.use(express.urlencoded({ extended: false }))

app.use(requestLogger)

// setup static and middleware
app.use(express.static('./public'))

app.use(apiRoutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
