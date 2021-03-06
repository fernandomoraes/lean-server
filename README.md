[![Build Status](https://travis-ci.org/fernandomoraes/lean-server.svg?branch=master)](https://travis-ci.org/fernandomoraes/lean-server) [![Coverage Status](https://coveralls.io/repos/github/fernandomoraes/lean-server/badge.svg?branch=master)](https://coveralls.io/github/fernandomoraes/lean-server?branch=master)

lean-server
=========

A small library to handle http requests.

## Installation

`npm install lean-server`

## Usage

```javascript
var lean = require('lean-server');

function sendResponse(res, text) { 
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.write(text);
	res.end();
}
 
 lean.instance()
      .register('/hello', (req, res) => sendResponse(res, 'Hello world'))
      .register('/bye', (req, res) => sendResponse(res, 'Byeee'))
      .on(8081).start();
```
