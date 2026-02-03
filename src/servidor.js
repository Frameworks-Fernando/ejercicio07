const http = require('http');

const server = http.createServer((req, res) => {
  // Configuramos que la respuesta sea texto plano
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  if (req.url === '/') {
    res.end('¡Bienvenido a mi servidor Backend!');
  } else if (req.url === '/contacto') {
    res.end('Página de contacto');
  } else {
    res.writeHead(404);
    res.end('Ruta no encontrada');
  }
});

// El servidor escuchará en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});