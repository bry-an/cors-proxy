const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3001;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhiteldist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});