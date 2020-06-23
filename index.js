'use strict';

let port = 25565;

let express = require('express');

express()
    .disable("x-powered-by")
    .enable("trust proxy")
    .use(express.static("static/"))
    .listen(port, () => {
        console.log(`Server running on port ${port}...\n`);
    });

