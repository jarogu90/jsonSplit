const fs = require('fs');

// CREO ARCHIVOS QUE SOLO CONTENGAN UNA [ DE APERTURA DE ARRAY

for(let j = 0; j <= 100; j++){
    let file = 'pedidos_'+[j]+'.json';

    fs.writeFile(file, '[', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}