# requisitos

El script se ha desarrollado con la versión 12.X de nodejs y para que funcione es necesario instalar las librerías "node-fetch" y "throttled-queue".

# lógica

Una vez importadas las librerías necesarias, lo que hace el script es recorrer una serie de archivos json. Se lee cada archivo y se parsean los datos a json para después ir recorriéndolos. Cada vuelta del bucle realiza una petición por segundo, según se ha establecido con la librería throttled-queue, a una url de elasticsearch a través de fetch para insertar los documentos en un index.

Al insertar los documentos, mostrará por consola si la inserción de cada documento se ha realizado con éxito o se ha producido algún error.

# ejecución

Para ejecutarlo, solo es necesario lanzar el script a través de una terminal con node index.js.

