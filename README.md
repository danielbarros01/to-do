# TO-DO

### Tecnologia empleada

- NODE JS
- JAVASCRIPT 
- PUG
- MYSQL
- CSS

## Detalles
Aplicacion web, para administrar tus tareas, con la tecnologia de **Express**.
Primero tendras que estar registrado para poder utilizarlo, se utilizo **bcrypt** para la autenticacion.
Para la comunicacion con la base de datos se utilizo **Sequelize** y AJAX del lado del cliente.

### Mas info
Para poder utilizarlo importa la base de datos expuesta como to-do-pruebas,
utiliza el gestor que mas te convenga, yo utilize PhpMyAdmin y MysqlWorkbench.

#### Configuracion
------------
En el archivo config.js dentro de la carpeta config:
Pon tus valores en `DB_PASSWORD` y `DB_DATABASE`.

      username: process.env.DB_USERNAME || "root",
      password: process.env.DB_PASSWORD || "Tu contraseña",
      database: process.env.DB_DATABASE || "to-do-Pruebas u otro nombre",
      host: process.env.DB_HOST || "127.0.0.1",
      dialect: process.env.DB_DIALECT || "mysql",

Tambien en el **.env** en la raiz del proyecto
    #Base de datos configuracion
    DB_USERNAME=root
    DB_PASSWORD=contraseña
    DB_DATABASE=nombreBaseDatos
    DB_HOST=localhost
    DB_DIALECT=mysql

Esa seria toda la configuracion que necesitas para iniciar con el proyecto.

### Demostracion:

- ##### Inicia sesion o registrate
![msedge_5hYBalNjx8](https://user-images.githubusercontent.com/54125409/211669502-0822e048-f769-431e-8585-c82deca27fae.gif)

- ##### Agrega nuevas secciones
![msedge_tzUGW9QMyZ](https://user-images.githubusercontent.com/54125409/211669965-5148d292-734a-45ad-b761-48df51aca563.gif)

- ##### Agrega tareas
![msedge_kJHxt8iKMz](https://user-images.githubusercontent.com/54125409/211832151-a29d863b-62ec-4ce8-ab9c-36f6a4eef862.gif)

- ##### Ordena
![chrome_AmrXe4kGxP](https://user-images.githubusercontent.com/54125409/211831675-9b28fd3c-9fe6-4d92-a19d-4a08a710c761.gif)

