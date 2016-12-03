var http = require('http');
var url = require('url');
var log = console.log;

module.exports = {
	instance: function () {
		return new Lean();
	}
};

function Lean () {

	var routes = {};
	var portToStart = 8000;

	function logBootStrap () {
		log('Server listening on http://localhost:%s', portToStart);
		if (Object.keys(routes).length) {
			log('Routes mapped:');
			for (route in routes) {	log(route);	}
		}
	}

	function notFount (req, res) {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('404 Not Found');
	}

	this.register = (route, handler) => {
		routes[route] = handler;
		return this;
	};

	this.on = port => {
		portToStart = port;
		return this;
	};

	this.start = () => {
		http.createServer((req, res) => {
			
			let pathname = url.parse(req.url).pathname;
			let handler = routes[pathname] || notFount;
			handler(req,res);

		}).listen(portToStart, logBootStrap);
	};
}