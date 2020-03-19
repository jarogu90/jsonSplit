const fs = require('fs');
const fetch = require('node-fetch');
const throttledQueue = require('throttled-queue');

for(let j = 1; j <= 55; j++){

  let file = 'tlgnc_order_'+[j]+'.json';
  
  fs.readFile(file, 'utf-8', (err, data) => {
    if(err) {
        return console.log(err);
    }

    let datos = JSON.parse(data);
    let throttle = throttledQueue(1, 1000);

    for(let i = 0; i < datos.length; i++) {
      throttle(function() {
        fetch('https://search-pedidos-dev-4rtoq2jtrckjskj25rghj3t5fy.eu-west-1.es.amazonaws.com/jaimepruebas/_doc/', {
            method: 'POST',
            body: JSON.stringify(datos[i]),
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => {
          console.error('Error:', error);
          throw new error;
        })
        .then(response => console.log('Success:', response));
      });
    }
  })
}
