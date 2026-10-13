
# Consumo de APIs ResFul

La presente pagina web estática desarrollada para consumir y mostrar la informacion de diferentes APIs publicas utilizadas por medio de la arquitectura REST,los datos se reciben en formato JSON y muestran los datos por medio de un index.html



## Integrantes

Chasi Alexis  Defaz Leonardo Estrada Anderson
## Link

```
GitHub Pages: https://leodefaz367.github.io/Practica2_APIs/

Netlify: https://velvety-cajeta-b4aeed.netlify.app/
```


## Petición HTTP
Para realizar las peticiones a las APIs se empleó la sintaxis async y await junto con la Fetch API, para manejar las promesas y controlar posibles errores en la conexión:
```
async function llamado() {
    try {
        const url = "Url de la api"
        const request = await fetch(url)
        if(!request.ok){
            throw new Error("Error en durante la conexion")
        }
}
llamado()
```





## Visor de Usuarios - Alexis Chasi
Muetra la informacion del primer cliente
### API utilizada
```
https://jsonplaceholder.typicode.com/users/1
```
Los datos mostrados son: nombre, nombre de usuario, correo, empresa, ciudad y sitio web para ser mostrados. Al no poseer una imagen se muestra una imagen de internet.
## Visor de Productos Ecommers - Estrada Anderson
Muestra la informacion un producto específico.
### API utilizada
```
https://fakestoreapi.com/products/16
```
La informacion obtenida a mostrar son: imagen, nombre, precio, categoría, descripción y calificación del producto.
## Visor de Animales de Adopción - Défaz Leonardo
La tercera seccion muestra un animal de forma aletoria.
### API utilizada
```
https://dog.ceo/api/breeds/image/random

```
Se genera y muestra la imagen de un perro de forma aleatoria cada vez que el usuario interactúa con la interfaz