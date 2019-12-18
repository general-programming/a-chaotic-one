var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(25565, function(){
    console.log('Server running on 25565...');
});