# AndroDev Website

Sitio desarrollado con NextJS 13. [DOCUMENTACIÓN](https://beta.nextjs.org/docs)
## Installation


```bash
npm install
```

## Uso

```bash
# Correr el proyecto
npm run dev

# Ejecutar en analisis de librerias Chunkbase
npm run analyze
```

## Estructura Principal

- Dentro de la carpeta ```app``` se encuentra todo el sistema de routing (no funcional)
- El archivo ```Layout```define el diseño base de los archivos dentro del enrutamiento principal
- El archivo ```page.js``` define por defecto el home del sitio (no cambiar nombre del archivo)
- El archivo ```head``` es opcional
- Los componentes que se pueden reutilizar están en ```components```
- Las secciones del sitio web se encuentran en la carpeta ```sections```
- Actualmente la carpeta ```pages``` no tiene ningún uso. Anteriormente se usaba para en enrutamiento pero con la v13 ```app``` es la carpeta para ello
- La información de componentes internos como tarjetas o servicio se encuentran en ```constants```

## Aclaraciones

- Si algún error surge y se requieren hacer cambios en la configuración de next ir al archivo ```next.config.js```
