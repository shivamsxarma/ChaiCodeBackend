// // const fs = require("fs" )
// // const path = require("path")
// // const os = require("os")

// // console.log("NodeJS:", process.versions.node);
// // console.log("V8:", process.versions.v8);
// // console.log("NodeJS:", process.versions.uv);
// // console.log("================================") ;
// // console.log("platform:", process.platform);
// // console.log("CPU:", os.cpus().length);

// const http = require('http')

// const server = http.createServer((res,req) => {
//     if(req.method === 'GET' && req.url === '/menu'){
//         res.writeHead(200, {Content-Type:'application/json'})
//         res.end(JSON.stringify({items:['thali','biryani']}))
//     }else if (req.method === 'POST' && req.url === '/order'){
//          let data = ' '
//          req.on('data', chunk => data += chunk)
//          req.on('end', () => {
//             const order = JSON.parse(data)
//               res.writeHead(200, {content-Type:'application/json'})
//         res.end(JSON.stringify({items:['thali','biryani']}))
//          })
//     }
// })

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express is working on Windows 11!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
