var config = require('./config');
var restify = require('restify');
var server = restify.createServer();
var serveStatic = restify.serveStatic;


server.get('/', serveStatic({
  directory: './public',
  default: 'index.html'
}));

server.listen(config.port, config.host, function() {
  console.log('Listening on ' + config.host + ':' + config.port);
});