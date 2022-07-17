const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET') {
   res.setHeader('Content-Type', 'text/html')   
   res.writeHead(200)
   res.write('<h1>Hello, world!</h1>')
   res.end()
  } else {
   res.setHeader('Content-Type', 'text/html')
   res.writeHead(400)
   res.end('<h1>Adashdiz!</h1>')
  }
});

server.listen(5000)