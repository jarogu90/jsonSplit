const fs = require('fs'),
      fetch = require('node-fetch'),
      throttledQueue = require('throttled-queue'),
      argv = require('yargs').argv;

// command: node <index1.js> --doc=<file-name> --url=<fetch-url>
fs.readFile(argv.doc, 'utf-8', (err, data) => {
    if(err) {
        return console.log(err);
    }
    let datos = JSON.parse(data);
    console.log(datos.length);
    let throttle = throttledQueue(1, 100);

    for(let i=0;i<datos.length; i++) {
        throttle(function() {
            fetch(argv.url, {
                method: 'POST', 
                body: JSON.stringify(datos[i]), // data can be `string` or {object}!
                headers:{
                'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .catch(error => {console.error('Error:', error);
            throw new error;})
            .then(response => console.log('Success:', response));
        });
    } 
})