<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

## Descripción
Este repositorio es un ejemplo para crear una libreria en NestJS compartida.

## Contenido
```
└── 📁src
    └── core.module.ts
    └── index.ts
    └── 📁logging
        └── logging.interceptor.ts
```

## Modo de uso
1. Usar el comando ```npm run build``` para crear el transpilado de la libreria.
2. Hacer ```cd dist``` para ingresar al directorio del compilado.
3. Usar ```npm pack``` para crear ```.tgz```.
4. Para hacer uso en un servicio NestJS se debe tomar la ruta del ```.tgs``` y hacer un ```npm install RUTA_TGZ```.