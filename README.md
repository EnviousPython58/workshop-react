
## Creando nuestra aplicacion React 

En el directorio del proyecto, tu puedes ejecute:

Para configurar `create-react-app`, ejecute el siguiente código en su terminal, un directorio desde donde desea que viva el proyecto. Asegúrese de tener 5.2 o superior en Node.js.

```
npx create-react-app calculator
```
Una vez que finalice la instalación, muévase al directorio recién creado e inicie el proyecto.
```
cd calculator
npm start
```    
Una vez que ejecute este comando, aparecerá una nueva ventana en `localhost:3000` con su nueva aplicación React.

Continúe y elimine todos los archivos del directorio `/src`, y crearemos nuestro propio archivo repetitivo sin ningún tipo de problema. Solo mantendremos `index.css` e `index.js`.

Ahora en index.js, estamos importando React, ReactDOM y el archivo CSS.

## Primeros pasos con React

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
``` 
Al momento de llamar nuestro React y ReactDOM 
```javascript
const HI = <h1>Hola mundo</h1>
ReactDOM.render(HI, document.getElementById('root'));
``` 