Bienvenidos a mi proyecto de React, siendo un proyecto de E-commerce, dicha app fue creado con el siguiente comando: [Create React App](https://github.com/facebook/create-react-app).

## Scripts para inicializar la aplicación

Ubicado sobre el proyecto correr el siguiente comando (Git bash, comando de windows, etc) :

### `npm run start`

La aplicación corre en modo desarrollo.<br />
Abrir [http://localhost:3000](http://localhost:3000) para visualizar la aplicación en el browser.


Al iniciar la aplicación podrá observar la página funcional, que se encuentra formada con una estética, en dónde se utilizo bootstrap con una estructura de columnas flexibles y responsive (tánto para pc, cómo para dispositivos móviles)..

<br />


`¿Qué implementamos?`
<br />
---
- Componentes de React para creación de la UI de productos<br> 
- NavBar<br /> 
- Contenido - Section (página principal, página de detalle y página del carrito de compra para finalizar la operación), <br/>
- footer

---
`Librerías que abarca el proyecto con fines visuales`
<br />
---
- "bootstrap"
- "react-bootstrap"
- "react-modal"
- "reactstrap"
- "react-reveal"
---

`Agregando rutas`
<br />
---
- "React-Routers"

---

`Base de Datos (FireBase)`
<br />
---
- "FireStore"

---
---

`uso de useState y useEffect`
<br />
---
- "Manejaremos los estados para dominar el render de nuestra app, y useEffect para corroborar el montaje y desmontaje de componentes, cómo así también de necesitar realizar un seguimiento a un estado en particular"

---
`Requisitos en conocimientos para realizar dicho proyecto`
<br />
---
- "HTML y CSS"
- "JavasCript"
<br>
<br><br>
### INTRODUCCIÓN:
---
### `Components: ItemListContainer - ItemList - Item`
---
- ItemListContainer:<br> Es el contenedor en dónde se recibe los datos de FireStore (datos de nuestros productos), dentro del mismo creamos la funcionalidad para que recorra los datos y vaya agregando los items, pasándole los datos al componente ItemList como "props".<br />

- ItemList:<br> Es dónde recibimos esas "props", las recorremos y vamos agregando por cada dato un item -> que se encuentra estructurado en el componente Item.

- Item:<br> Hacemos un object destructuring de las props que obtuvimos de ItemList, y se lo agregamos a cada campo con su respectivo atributo.
<br><br><br>
---
### `Components: ItemDetailContainer - ItemDetail`
---
- ItemDetailContainer:<br> Es el contenedor de los detalles de cada producto, en dónde hacemos una consulta a FireStore independientemente del documento utilizando `"UseParams"` para atrapar el "ID" y compararlo con el ID de FireStore.<br/>
Pasamos los datos del ID como `props` al componente Hijo **ItemDetail**.

- ItemDetail:<br> Recibe las props del componente Padre y va agregando los datos al **HTML**.<br> **->** Incluye Funcionalidad `onAdd` -> donde pasamos el objecto que armamos con la cantidad y el item que contiene los daetalles.
<br><br><br>

---
### `Components: CartContext`
---
- CartContext:<br> Abarca las funcionalidades de:<br> `onAdd()` -> Agrega los Items al component **Cart**,<br> `increase()`-> Incrementa las unidades del producto,<br>`decrease()`->Decremeta las unidades del producto,<br>`removeItem()`-> Elimina el Item individualmente del carrito,<br>`clear()`-> Elimina y vacía completamente el carrito<br/>
Pasamos los datos del ID como `props` al componente Hijo **ItemDetail**.
<br><br><br>

---
### `Components: CartItem`
---
- CartItem:<br> Recibe el cart (contiene nuestro objeto de items) y con un `function map()` recorremos nuestro objeto y se lo pasamos como props a nuestro componente **Cart**.<br>
Dentro de éste componente realizamos las funcionalidades de `counter` y `total`.
<br><br><br>

---
### `Components: Cart`
---
- Cart:<br> Recibe las props proporcionadas por el padre, y los va agregando al **HTML**.
<br><br><br>
---
### `Components: APP.JS`
---
- Tenemos todos nuestros componentes y a la vez nos encontramos con el `Provider` para que todos los children tengan acceso al `component context`, a la vez tenemos el `routing` --> `<BrowserRouter> y el <Switch>` que encapsulan los componentes para que puedan ser ruteados entre ellos. 



## Vea también:
Ver documentación --> [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Dudas, verifique la documentación de React [React documentation](https://reactjs.org/).
<br><br>
### Hacer una app web Progresiva

Ingresar aquí: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
<br><br>
### Configuración avanzada

Ingresar Aquí: https://facebook.github.io/create-react-app/docs/advanced-configuration
<br><br>
### Despliegue

Ingresar Aquí: https://facebook.github.io/create-react-app/docs/deployment
<br><br>
### `npm run build` No SE MINIMIZA

Ingresar Aquí: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
<br><br>

***LIVE DEMO***
<div style="width:184px;max-width:100%;"><div style="height:0;padding-bottom:53.8%;position:relative;"><iframe width="184" height="99" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/4o56xk"></iframe></div><p><a href="https://imgflip.com/gif/4o56xk">via Imgflip</a></p></div>
