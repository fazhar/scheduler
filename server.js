var http = require('http');
var url = require('url');

function start(router, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname
        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(8000);
}

exports.start = start;
