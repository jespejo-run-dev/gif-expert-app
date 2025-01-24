# GifExpertApp

GifExpertApp es una aplicación desarrollada con React que permite buscar y visualizar gifs animados de diferentes categorías. Este proyecto está diseñado para explorar conceptos fundamentales de React, como la comunicación entre componentes, el manejo del estado, y el uso de hooks.

---

## Características

- **Búsqueda por categorías:** Los usuarios pueden agregar categorías y obtener gifs relacionados de manera dinámica.
- **Consumo de APIs:** La aplicación utiliza la API de Giphy para buscar y mostrar gifs.
- **Custom Hooks:** Implementación de hooks personalizados para mejorar la reutilización de lógica.
- **Feedback visual:** Muestra mensajes de carga mientras se obtienen datos de la API.
- **Validación de entradas:** Garantiza que las categorías agregadas sean únicas.
- **Organización modular:** Uso de archivos de barril para una estructura de carpetas más limpia.

---

## Estructura del Proyecto

### Componentes principales:
1. **`GifExpertApp`**: Componente raíz que administra las categorías y orquesta el flujo de la aplicación.
2. **`AddCategory`**: Permite agregar nuevas categorías a la lista.
3. **`GifGrid`**: Muestra una cuadrícula de gifs basada en la categoría proporcionada.
4. **`GifItem`**: Renderiza cada gif individual con su título correspondiente.

### Hooks personalizados:
- **`useFetchGifs`**: Encargado de manejar las solicitudes a la API de Giphy y gestionar el estado de carga y los datos obtenidos.

---

## Tecnologías utilizadas

- **React**: Biblioteca principal para construir la interfaz.
- **Fetch API**: Para realizar solicitudes HTTP a la API de Giphy.
- **CSS**: Para estilos básicos y clases dinámicas.
- **JavaScript ES6+**: Para funcionalidad moderna y manejo de datos.

---

## Instalación y Uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/gifexpertapp.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm start
   ```
4. Abre tu navegador y accede a `http://localhost:3000`.
