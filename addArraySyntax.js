const fs = require('fs');
const throttledQueue = require('throttled-queue');

// INSERTO EN LOS ARCHIVOS CREADOS EN rename.js LOS DATOS DE LOS ARCHIVOS ANTIGUOS Y SUSTITUYO LA COMA (,) DEL FINAL POR EL CORCHETE (]) DE CERRAR EL ARRAY

for(let j = 91; j <= 100; j++){

    let file = 'pedidos'+[j];
    let newFile = 'pedidos_'+[j]+'.json';
    let throttle = throttledQueue(1, 500);

    fs.readFile(file, 'utf-8', (err, data) => {
      if(err) {
          return console.log(err);
      }
  
      var lastIndex = data.lastIndexOf(",");
      //console.log(lastIndex)
      let datos = data.substring(0, lastIndex);
      //console.log(ultimaComa)
  
      fs.appendFile(newFile, datos, (err) => {
        if (err) throw err;
        console.log('Los datos se han añadido');
      });
  
      fs.appendFile(newFile, ']', (err) => {
        if (err) throw err;
        console.log('Los datos se han añadido');
      });
    })
}
