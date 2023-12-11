!Aqui verás las instrucciones para abrir este proyecto de Cotización de bicicletas con React!

1- Debes clonar mi repositorio en GitHub  utilizando el siguiente comando en la terminal de Visual Studio Code,de la siguiente manera:  git clone <URL_DE_MI_REPOSITORIO>

2- Debes moverte al directorio del proyecto, de la siguiente manera:  cd nombre_del_proyecto

3- Debes instalar las dependencias del proyecto, de la siguiente manera: npm install

4- Una vez que se instalaron las dependencias, puedes iniciar la aplicación de la siguiente manera: npm run dev (te general una ruta y manteniendo la tecla "Ctrl" + "Click izquierdo", abrira la app en el navegador predeterminado).



------------------------------------PAGINA PRINCIPAL DE REACT (APP.JSX)---------------------------------------------------

En este archivo tuve que importar:
Los modulos necesarios de React, React Router ("BrowserRouter", "Route", "Routes")
La libreria Toastify para las notificaciones de exito en este caso.
El archivo CSS para sus estilos.

Tuve que importar los componentes necesarios que se utilizan en la ruta como:
<!--<Nav/>", "<Formulario/>, <Cotizador/>, <Historial/> --> 

Creé una función flecha llamada App, que es el punto de entrada principal para mi apliación.
Utilizé el hook "useState" para declarar el estado inicial "cotizaciones" como un array vacío, y se actualiza con el historial de cotizaciones.
Utilize el componente Router de React Router para envolver mi aplicación.
Utilize el componente Routes y defini tres rutas con "Route": Formulario, Historial y Cotizador.





---------------------------------------FORMULARIO DE REGISTRO----------------------------------------------------------

En el formulario de registro, además de las etiquetas y componentes para los campos de ingreso de datos, tuve que importar:

El archivo de datos CSS.
Las bibliotecas necesarias de React.
'UseState' (Que es un hook que te permite agregar estado a tus componentes funcionales en react).

‘ datosUsuario‘:  Es el estado que contiene los datos del usuario.
‘setDatosUsuario’:  Es la función que utilizo para actualizar el estado.
La función ‘useState’ devuelve un array con dos elementos:
El estado actual ‘datosUsuario’ y la función para actualizar el estado ‘setDatosUsuario’.
Cada vez que se llama a ‘setDatosUsuario’ con nuevos datos, se renderiza el componente con el nuevo estado, y se puede acceder a estos datos mediante ‘datosUsuario’.

UseEffect (Se utiliza para realizar efectos secundarios en los componentes).

Cuando el componente se monta, se verifica si hay datos en el ‘localStorage’, si hay, se utilizan para actualizar el estado mediante ‘setDatosUsuario’ .
Esto sirve también para que si el usuario completa los campos con sus datos y recarga la página sin apretar el botón de “Registrarme”, no desaparezcan sus datos.

En conjunto, me permiten mantener y actualizar el estado de mis componentes.

Tambien tuve que importar la biblioteca react-toastify (npm install react-toastify desde la terminal):
En este formulario use una notificación de éxito (‘ toast.success’)para cuando se apreta  en el botón “Registrarme” (personalizada, explicando que hace cada propiedad en visual studio code, en el archivo Formulario.jsx).




--------------------------------COTIZADOR (PAGINA PRINCIPAL)--------------------------------------------------------------

Tuve que importar:

El archivo CSS con sus estilos.
Las bibliotecas que necesito de React.
El archivo datos.json que tiene un array con todas las categorías.
La bibliote Toastify para agregar notificaciones de éxito (en este caso).

Tambien defini estados con el hook “useState” para almacenar la marca, tipo, rodado, precio estimado y la nueva cotización.

Filtré los datos del archivo “datos.json” para obtener las categorías de: bicicletas, marcas y rodados.

Defini la función “handleNotificación” para mostrar notificaciones exitosas en estos casos con las librerías importadas.

Defini la función “handleSubmit”  que se ejecuta cuando hacemos click en el botón “Cotizar”, también se asegura de que el usuario haya seleccionado el tipo de bicicleta, marca o rodado antes de realizar la cotización.

Para que pueda obtener los factores de acuerdo a la selección del usuario:

Utilizo “find” para buscar el array “bicicletas, marcas y rodado”, los objetos que coincidan con el “tipo,marca y rodado”.
Utilizo “?” para que devuelva “undefined” en caso de que no encuentre.
Utilizo “||1” para asegurar que si es “undefined” se use un factor de 1.

Despues también se fijé un precio base.
Realizo el calculo del precio final multiplicando los factores de las categorías seleccionadas por el usuario.
Creé un objeto “nuevaCotizacion” con información de la cotización, este objeto incluye la fecha actual, tipo de bicicleta, marca deseada, tipo de rodado y precio estimado.


Para la actualización de estado y limpieza:
Se actualiza el estado del precio estimado.
Se agrega la nueva cotización al historial.
Se limpian los estados del formulario.
Se muestra una notificación exitosa.





---------------------------------------------HISTORIAL--------------------------------------------------------------------

Se importan:

Las bibliotecas de react y react router necesarias junto con sus modulos('Link').
El archivo CSS con sus estilos.

Se crea una funcion flecha llamada Historial, que acepta a 'cotizaciones' como una propiedad para aceptar cotizaciones.
Se crea una tabla para mostrar el historial de las cotizaciones, incluyen las categorias de la cotización: fecha, tipo de bicicleta, marca deseada, tipo de rodado y poliza mensual.
Utilizo el metodo ".map" para iterar sobre las cotizaciones(recorre el array con los elementos y aplica una función con ayuda de "index" que es el indice del elemento que se este trabajando y una "key" para ayudar a react a identificar de manera unica cada fila) y crear una fila "tr" por cada cotización.
Agregué un boton dentro de un "Link" de React Router que redirige a la pagina de inicio "./".
















