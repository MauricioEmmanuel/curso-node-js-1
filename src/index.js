var server = require('http').createServer(function(request,response){
    if(request.url=="/"){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("<html><body><p>Inicio</p></body></html>");
        response.end();
    }else if(request.url=="/exit"){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("<html><body><p>Desconectando</p></body></html>");
        response.end();
    }else{
        response.writeHead(404, {"Content-Type":"text/html"});
        response.write("<html><body><p>No encontrado</p></body></html>");
        response.end();
    }
}
);
server.listen(8080, function() {
    console.log((new Date()) + 'Escuchando en el puerto 8080');
});