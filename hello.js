
const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = process.env.PORT || 5000; 

const server = http.createServer(function (req, res) {
	let q = url.parse(req.url, true);
//	console.log(q.pathname);
	let fileName = "."+ (q.pathname);
	if (fileName == "./") fileName = "./index";
	fileName = fileName + ".html";
	fs.readFile(fileName, (err, data) => {
		if (err) {
			res.writeHead(404, {"Content-type": "text/html" });
			return res.end("404 Not found");
		}
		res.writeHead(200, {"Content-type": "text/html" });
		res.write(data);
		return res.end();	
	})
	
}).listen(PORT);

console.log("Listening on port 8080...")