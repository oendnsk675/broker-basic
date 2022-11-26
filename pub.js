const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost:1882')

client.on('connect', function () {
    setInterval(() => {
        client.publish('test', 'Hello mqtt')
    }, 1000);
})
