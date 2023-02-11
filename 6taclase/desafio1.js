const http = require('http');

const server = http.createServer((request,response) => {
    let currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour <= 12) response.end("buenos días") //es como finalizo la respuesta del servidor. Si quiee otra tiene que volver a pedirla.
    if (currentHour >= 13 && currentHour <= 19) response.end("Excelente tarde")
    if (currentHour >= 20 || currentHour <= 5) response.end("buenas noches")
}) 

const connectedServer = server.listen(8080, () => {
    console.log(`Listening on port ${connectedServer.address().port}`);
})