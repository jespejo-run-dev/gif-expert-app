## **Documentación del Flujo de la Aplicación: GifExpertApp**

### **1. Descripción General**

La aplicación **GifExpertApp** es una aplicación de búsqueda de gifs basada en la API de Giphy. Los usuarios pueden agregar categorías y ver los gifs relacionados con esas categorías. La aplicación está estructurada en varios componentes de React que se comunican entre sí a través de **props** y **hooks**.

---

### **2. Estructura de Componentes**

#### **Componentes Principales:**

1. **GifExpertApp**
   - Es el componente principal que gestiona el estado de las categorías.
   - Se encarga de renderizar el formulario para agregar nuevas categorías y los componentes `GifGrid` para mostrar los gifs de cada categoría.

2. **AddCategory**
   - Este componente contiene un formulario para que los usuarios ingresen una nueva categoría.
   - Recibe una función `onNewCategory` como prop, que es ejecutada cuando el usuario agrega una nueva categoría.

3. **GifGrid**
   - Recibe una categoría como prop y utiliza el hook **`useFetchGifs`** para obtener los gifs relacionados con esa categoría.
   - Muestra los gifs en una cuadrícula utilizando el componente **`GifItem`**.

4. **GifItem**
   - Este componente recibe las propiedades de un gif individual (título, URL, ID) y renderiza cada gif en una tarjeta.

5. **useFetchGifs (Custom Hook)**
   - Hook personalizado que se encarga de obtener los gifs de la API de Giphy.
   - Devuelve los gifs obtenidos y el estado de carga (`isLoading`).

---

### **3. Flujo de Datos y Comunicación entre Componentes**

A continuación, se describe cómo los diferentes componentes se comunican entre sí:

#### **3.1. Comunicación entre `GifExpertApp` y `AddCategory`**
- **`GifExpertApp`** pasa una función llamada `onAddCategory` a **`AddCategory`** como prop.
- **`AddCategory`** captura el valor ingresado por el usuario y ejecuta `onAddCategory` con el nuevo valor de la categoría.
- **`GifExpertApp`** actualiza su estado de `categories` con la nueva categoría agregada.

#### **3.2. Comunicación entre `GifExpertApp` y `GifGrid`**
- **`GifExpertApp`** pasa el estado `categories` a **`GifGrid`** como prop.
- **`GifGrid`** mapea a través de las categorías y renderiza un componente **`GifGrid`** para cada categoría.
- Cada **`GifGrid`** recibe la categoría específica como prop y solicita los gifs para esa categoría.

#### **3.3. Comunicación entre `GifGrid` y `useFetchGifs`**
- **`GifGrid`** pasa la categoría recibida como prop a **`useFetchGifs`**.
- **`useFetchGifs`** hace una solicitud HTTP a la API de Giphy para obtener los gifs correspondientes a esa categoría.
- **`useFetchGifs`** devuelve los gifs y el estado de carga (`isLoading`) a **`GifGrid`**.

#### **3.4. Comunicación entre `GifGrid` y `GifItem`**
- **`GifGrid`** mapea los gifs obtenidos y pasa cada gif a **`GifItem`** como prop.
- **`GifItem`** renderiza los gifs, mostrando su título y su imagen.

---

### **4. Flujo Completo de la Aplicación**

1. **Inicio de la aplicación**:
   - El componente **`GifExpertApp`** se renderiza con una categoría predeterminada (`'One Punch Man'`).
   
2. **Agregar una nueva categoría**:
   - El usuario introduce una nueva categoría en el formulario de **`AddCategory`**.
   - **`AddCategory`** ejecuta la función `onAddCategory`, pasando el nuevo valor de la categoría a **`GifExpertApp`**.
   - **`GifExpertApp`** actualiza su estado de `categories` con la nueva categoría.

3. **Renderización de categorías**:
   - **`GifExpertApp`** mapea las categorías y por cada una de ellas, renderiza un componente **`GifGrid`**.
   - Cada **`GifGrid`** recibe una categoría específica como prop y solicita los gifs para esa categoría.

4. **Obtención de gifs**:
   - **`GifGrid`** utiliza el hook **`useFetchGifs`** para obtener los gifs de la categoría que recibe como prop.
   - **`useFetchGifs`** realiza la solicitud a la API de Giphy y obtiene los gifs.
   - Una vez que los gifs son obtenidos, **`useFetchGifs`** actualiza el estado `images` y establece `isLoading` en `false`.

5. **Renderización de gifs**:
   - **`GifGrid`** mapea los gifs obtenidos y pasa cada gif a **`GifItem`** como prop.
   - **`GifItem`** renderiza cada gif mostrando su título y su imagen.

---

### **5. Diagrama del Flujo de Datos**

```plaintext
[GifExpertApp]
      |
      |-- (1) pasa "onAddCategory" --> [AddCategory] --(2)--> [GifExpertApp] (actualiza el estado categories)
      |
      |-- (3) pasa categorías --> [GifGrid] --(4)--> [useFetchGifs] (obtiene gifs)
      |                                       |
      |                                       v
      |                                   [API Giphy] --(5)--> [useFetchGifs] (devuelve gifs)
      |
      |-- (6) mapea gifs --> [GifItem] --(7)--> Renderiza gif
```

---

### **6. Descripción de Propiedades y Funciones**

#### **`GifExpertApp`**:
- **Estado**:
  - `categories`: Lista de categorías actuales (inicialmente con `'One Punch Man'`).
- **Funciones**:
  - `onAddCategory`: Agrega una nueva categoría si no existe.

#### **`AddCategory`**:
- **Estado**:
  - `inputValue`: Valor del campo de entrada.
- **Props**:
  - `onNewCategory`: Función que se ejecuta al agregar una nueva categoría.

#### **`GifGrid`**:
- **Props**:
  - `category`: Categoría para la cual se van a obtener los gifs.
- **Estado**:
  - No tiene estado interno, pero usa el hook **`useFetchGifs`** para obtener los gifs.

#### **`useFetchGifs`**:
- **Hooks**:
  - `useState`: Para almacenar los gifs (`images`) y el estado de carga (`isLoading`).
  - `useEffect`: Para realizar la solicitud de gifs cuando la categoría cambia.
- **Función**:
  - `getImages`: Función asincrónica que obtiene los gifs de la API.

#### **`GifItem`**:
- **Props**:
  - `title`: Título del gif.
  - `url`: URL de la imagen del gif.

---

### **7. Consideraciones y Mejoras Futuras**

- **Optimización de rendimiento**: Se podría agregar paginación o carga perezosa (lazy loading) para mejorar el rendimiento si hay muchas categorías o gifs.
- **Validación de entradas**: Agregar validación más robusta para el formulario en **`AddCategory`**.