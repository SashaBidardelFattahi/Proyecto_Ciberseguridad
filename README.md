#  Proyecto Web de Ciberseguridad

Este es un proyecto de página web sobre ciberseguridad, desarrollado utilizando tecnologías web modernas como **HTML**, **CSS**, **JavaScript** y **Bootstrap**. El sitio web tiene como objetivo proporcionar información sobre productos y noticias relacionadas con la seguridad cibernética, además de permitir a los usuarios interactuar mediante el registro, inicio de sesión y la visualización de productos de forma dinámica en fases posteriores.

## Fase del Proyecto

Este proyecto se encuentra en la **Fase 2** de desarrollo. En esta fase, se han implementado las siguientes características:

- Página de inicio con un **carrusel de imágenes**.
- **Navbar** con enlaces a las secciones **Noticias**, **Compras**, **Registro** y **Login**.
- Secciones de **Noticias** y **Productos** con cartas estáticas de prueba.
- **Sistema de registro y login** validado por JavaScript (para pruebas).
- Estilo visual con **Bootstrap** y personalización con **CSS**.

## Tecnologías Utilizadas

- **HTML**: Estructura básica de las páginas.
- **CSS**: Estilos y personalización de la apariencia.
- **JavaScript**: Funcionalidad para la validación de formularios de registro y login, además de futuras interacciones con el backend.
- **Bootstrap**: Framework CSS para el diseño y la interfaz de usuario (UI).
- **API**: Para la futura implementación de noticias dinámicas (actualmente estáticas).
- **Neocities**: Servidor gratuito para el alojamiento del proyecto (en desarrollo).

## Características

### Página de Inicio
La página de inicio cuenta con un **carrusel de imágenes** que muestra información relacionada con la ciberseguridad. Además, incluye un **navbar** con los siguientes enlaces:
- Noticias
- Compras
- Registro/Login (con icono de usuario)

### Sección de Noticias
Las noticias están inicialmente cargadas de forma estática, pero se actualizarán para consumirse mediante una **API externa** en fases posteriores del proyecto. Cada noticia está representada por una carta con un título, una breve descripción y un enlace para leer más.

### Sección de Compras
Los productos de la tienda están inicialmente definidos de forma estática. En la fase final, los **vendedores** podrán agregar, editar y eliminar productos en esta sección.

### Registro y Login
Los usuarios pueden registrarse e iniciar sesión utilizando el sistema de validación hecho en JavaScript. La funcionalidad de la base de datos y el backend se agregará en fases posteriores del proyecto.

## Plan de Desarrollo Futuro

### Backend
- Implementación de un **backend en Java** para gestionar el almacenamiento de usuarios, productos y noticias.
- Conexión con una base de datos **MySQL** para almacenar de manera persistente la información de productos, noticias y usuarios.

### Funcionalidades
- Los **usuarios vendedores** podrán agregar, editar y eliminar productos.
- La sección de **noticias** se actualizará para obtener la información mediante una API externa (como la API de Mediastack).
- Implementación de un sistema de gestión de usuarios, incluyendo la validación del rol (comprador o vendedor).

## Instalación

Para comenzar con este proyecto, simplemente clona este repositorio en tu máquina local:

```bash
git clone https://github.com/SashaBidardelFattahi/Proyecto_Ciberseguridad.git
