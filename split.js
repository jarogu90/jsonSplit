const fs = require('fs');
const fetch = require('node-fetch');

fs.readFile('tlgnc_order.json', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  let datos = JSON.parse(data);
  let arrayDatos = datos.tlgnc_order;

  for(let i = 0; i < arrayDatos.length; i++){
    const data = arrayDatos[i];
    fetch('https://search-pedidos-dev-4rtoq2jtrckjskj25rghj3t5fy.eu-west-1.es.amazonaws.com/', {
      method:'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-ndjson'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
});
