const aedes = require('aedes')()
const httpServer = require('http').createServer()
var mqttServer = require('net').createServer(aedes.handle);
const ws = require('websocket-stream')
const port = 8888
const port_mqtt = 1882;

mqttServer.listen(port_mqtt, function () {
	console.log('mqtt broker listening on port', port_mqtt)
})

ws.createServer({ server: httpServer }, aedes.handle)


// baca
aedes.subscribe ('test', function(packet, cb) {
    console.log(packet.payload.toString());
    cb()
})

httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port)
})