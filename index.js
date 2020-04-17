const fs = require('fs');
const fetch = require('node-fetch');
const throttledQueue = require('throttled-queue');

//for(let j = 0; j <= 2; j++){

  //let file = 'pedidos_'+[j]+'.json';
  
  fs.readFile('pedidos_30.json', 'utf-8', (err, data) => {
    if(err) {
        return console.log(err);
    }

    let datos = JSON.parse(data);
    let throttle = throttledQueue(1, 1000);

    for(let i = 0; i < datos.length; i++) {
      throttle(function() {
        fetch('https://search-pedidos-dev-4rtoq2jtrckjskj25rghj3t5fy.eu-west-1.es.amazonaws.com/data_retries/_doc', {
            method: 'POST',
            body: JSON.stringify(datos[i]),
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => {
          console.error('Error:', error);
          
          // BUSCO QUE EN CASO QUE SALTE UN ERROR, VUELVA A INTENTAR LA PETICIÓN HASTA 5 VECES O HASTA QUE RECIBA UNA RESPUESTA
          let retries = 0;
          let retriesThrottle = throttledQueue(1, 30000);
          
          do{
            retriesThrottle(function() {
              fetch('https://search-pedidos-dev-4rtoq2jtrckjskj25rghj3t5fy.eu-west-1.es.amazonaws.com/data_retries/_doc', {
              method: 'POST',
              body: JSON.stringify(datos[i]),
              headers:{
              'Content-Type': 'application/json'
              }
              }).then(res => res.json())
              .catch(err => {
                console.error('Error:', err);
                //throw new err;
                retries += 1;
              })
              .then(r => console.log('Success:', 'OK'+r));
            })
          } while(retries <= 5 && !r)
          
          //throw new error;
        })
        .then(response => console.log('Success:', response));
      });
    }
  })
//}
