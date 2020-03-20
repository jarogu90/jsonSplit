# Requisitos
#### Script: index.js
El script se ha desarrollado con la versión 12.X de nodejs y para que funcione es necesario instalar las librerías "node-fetch" y "throttled-queue".

Comandos de instalación:
```
npm install fetch
npm install throttled-queue
```
Más Información: [npm Pages] (https://www.npmjs.com/package/fetch), (https://www.npmjs.com/package/throttled-queue)

#### Script: index1.js
El script se ha desarrollado con la versión 12.X de nodejs y para que funcione es necesario instalar las librerías "node-fetch", "throttled-queue" y "yargs".

Comandos de instalación:
```
npm install fetch
npm install throttled-queue
npm install yargs
```

Más Información: [npm Pages] (https://www.npmjs.com/package/fetch), (https://www.npmjs.com/package/throttled-queue), (https://www.npmjs.com/package/yargs)

# Lógica
#### Script: index.js
Una vez importadas las librerías necesarias, lo que hace el script es recorrer una serie de archivos json. Se lee cada archivo y se parsean los datos a json para después ir recorriéndolos. Cada vuelta del bucle realiza una petición por segundo, según se ha establecido con la librería throttled-queue, a una url de elasticsearch a través de fetch para insertar los documentos en un index.

Al insertar los documentos, mostrará por consola si la inserción de cada documento se ha realizado con éxito o se ha producido algún error.

#### Script: index1.js
Una vez importadas las librerías necesarias, lo que hace el script es leer el archivo (que se pasa cómo segundo argumento por terminal) y se parsean los datos a json para después ir recorriéndolos. Cada vuelta del bucle realiza una petición cada 100 milisegundos, según se ha establecido con la librería throttled-queue, a una url de elasticsearch (que se pasa cómo tercer argumento por terminal) a través de fetch para insertar los documentos en un index.

Al pasar los argumentos por terminal, no se debería modificar el script para indicar el archivo json, ni la url.

# Ejecución
#### Script: index.js
Para ejecutarlo, solo es necesario lanzar el script a través de una terminal con node index.js.

Comando:
```
 node <index.js>
```

#### Script: index1.js
Para ejecutarlo, solo es necesario lanzar el script a través de una terminal de la siguiente forma:

Comando:
```
 node <index1.js> --doc=<file-name> --url=<'fetch-url'>
```
