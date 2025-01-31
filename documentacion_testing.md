### **1. Pruebas en `<AddCategory />`**

#### **Propósito General:**
Verificar que el componente `<AddCategory />` funcione correctamente, incluyendo la actualización del input, el envío del formulario y la llamada a la función `onNewCategory`.

---

#### **Prueba 1: `debe de cambiar el valor de la caja de texto`**
```javascript
test('debe de cambiar el valor de la caja de texto ', () => {
    render(<AddCategory onNewCategory={() => {}} />); 
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Valorant' } });

    expect(input.value).toBe('Valorant');
});
```

- **Propósito:**  
  Verificar que el valor del input cambie correctamente cuando el usuario escribe en él.

- **Conceptos Clave:**
  - **`render`:** Renderiza el componente en un entorno de prueba.
  - **`screen.getByRole('textbox')`:** Selecciona el input basándose en su rol accesible.
  - **`fireEvent.input`:** Simula un evento de cambio en el input.
  - **`expect(input.value).toBe('Valorant')`:** Verifica que el valor del input sea `'Valorant'`.

- **Resultado Esperado:**  
  El valor del input debe ser igual a `'Valorant'` después de simular el evento de cambio.

---

#### **Prueba 2: `debe llamar onNewCategory si el input tiene un valor`**
```javascript
test('debe llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Valorant';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />); 
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
});
```

- **Propósito:**  
  Verificar que la función `onNewCategory` se llame correctamente cuando el formulario se envía con un valor en el input.

- **Conceptos Clave:**
  - **`jest.fn()`:** Crea una función mockeada para rastrear llamadas.
  - **`fireEvent.submit`:** Simula el envío del formulario.
  - **`expect(onNewCategory).toHaveBeenCalled()`:** Verifica que la función fue llamada.
  - **`expect(onNewCategory).toHaveBeenCalledWith(inputValue)`:** Verifica que la función fue llamada con el argumento correcto.

- **Resultado Esperado:**  
  - El input debe estar vacío después del envío.
  - `onNewCategory` debe ser llamada una vez con el valor `'Valorant'`.

---

#### **Prueba 3: `debe no llamar onNewCategory si el input está vacío`**
```javascript
test('debe no llamar onNewCategory si el input está vacío', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />); 

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
});
```

- **Propósito:**  
  Verificar que la función `onNewCategory` no se llame si el input está vacío al enviar el formulario.

- **Conceptos Clave:**
  - **`expect(onNewCategory).not.toHaveBeenCalled()`:** Verifica que la función no fue llamada.

- **Resultado Esperado:**  
  `onNewCategory` no debe ser llamada si el input está vacío.

---

### **2. Pruebas en `<GifGrid />`**

#### **Propósito General:**
Verificar que el componente `<GifGrid />` muestre correctamente el estado de carga y los GIFs obtenidos.

---

#### **Prueba 1: `debe mostrar el loading inicialmente`**
```javascript
test('debe mostrar el loading inicialmente ', () => {
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
});
```

- **Propósito:**  
  Verificar que el componente muestre un mensaje de carga inicialmente.

- **Conceptos Clave:**
  - **`useFetchGifs.mockReturnValue`:** Simula el comportamiento del hook `useFetchGifs`.
  - **`screen.getByText('Cargando...')`:** Verifica que el texto `'Cargando...'` esté presente.

- **Resultado Esperado:**  
  El componente debe mostrar `'Cargando...'` y el nombre de la categoría.

---

#### **Prueba 2: `debe mostrar items cuando se cargan las imagenes desde useFetchGifs`**
```javascript
test('debe mostrar items cuando se cargan las imagenes desde useFetchGifs', () => {
    const gifs = [
        { id: '1', title: 'GIF 1', url: 'url1' }, 
        { id: '2', title: 'GIF 2', url: 'url2' },
        { id: '3', title: 'GIF 3', url: 'url3' },
    ];

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(3);
});
```

- **Propósito:**  
  Verificar que el componente muestre los GIFs correctamente cuando se cargan.

- **Conceptos Clave:**
  - **`useFetchGifs.mockReturnValue`:** Simula el comportamiento del hook `useFetchGifs`.
  - **`screen.getAllByRole('img')`:** Selecciona todas las imágenes en el componente.

- **Resultado Esperado:**  
  El componente debe mostrar 3 imágenes.

---

### **3. Pruebas en `<GifItem />`**

#### **Propósito General:**
Verificar que el componente `<GifItem />` renderice correctamente los GIFs con sus propiedades.

---

#### **Prueba 1: `debe hacer match con el snapshot`**
```javascript
test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
});
```

- **Propósito:**  
  Verificar que el componente no cambie su estructura HTML.

- **Conceptos Clave:**
  - **`toMatchSnapshot()`:** Compara el HTML generado con un snapshot anterior.

- **Resultado Esperado:**  
  El HTML generado debe coincidir con el snapshot.

---

#### **Prueba 2: `debe mostrar la imagen con el URL y el ALT indicado`**
```javascript
test('debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
});
```

- **Propósito:**  
  Verificar que la imagen tenga el `src` y `alt` correctos.

- **Conceptos Clave:**
  - **`screen.getByRole('img')`:** Selecciona la imagen y permite acceder a sus atributos.

- **Resultado Esperado:**  
  La imagen debe tener el `src` y `alt` correctos.

---

#### **Prueba 3: `debe mostrar el titulo en el componente`**
```javascript
test('debe mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
});
```

- **Propósito:**  
  Verificar que el título se muestre correctamente en el componente.

- **Conceptos Clave:**
  - **`screen.getByText(title)`:** Verifica que el título esté presente.

- **Resultado Esperado:**  
  El título debe estar visible en el componente.

---

### **4. Pruebas en `getGifs()`**

#### **Propósito General:**
Verificar que la función `getGifs` devuelva un arreglo de GIFs con las propiedades correctas.

---

#### **Prueba 1: `debe retornar un arreglo de gifs`**
```javascript
test('debe retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.stringMatching(/^https?:\/\/.+$/),
    });
});
```

- **Propósito:**  
  Verificar que la función `getGifs` devuelva un arreglo de GIFs con las propiedades correctas.

- **Conceptos Clave:**
  - **`expect.any(String)`:** Verifica que el valor sea de tipo `string`.
  - **`expect.stringMatching(/^https?:\/\/.+$/)`:** Verifica que el valor sea una URL válida.

- **Resultado Esperado:**  
  La función debe devolver un arreglo de GIFs con las propiedades esperadas.

---

### **5. Pruebas en `useFetchGifs`**

#### **Propósito General:**
Verificar que el hook `useFetchGifs` maneje correctamente el estado de carga y los datos obtenidos.

---

#### **Prueba 1: `debe regresar el estado incial`**
```javascript
test('debe regresar el estado incial', () => {
    const { result } = renderHook(() => useFetchGifs('Valorant'));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
});
```

- **Propósito:**  
  Verificar que el hook devuelva el estado inicial correctamente.

- **Conceptos Clave:**
  - **`renderHook`:** Renderiza el hook en un entorno de prueba.
  - **`result.current`:** Accede al estado actual del hook.

- **Resultado Esperado:**  
  El estado inicial debe tener `images: []` y `isLoading: true`.

---

#### **Prueba 2: `debe retornar un arreglo de imagenes y isLoading en false`**
```javascript
test('debe retornar un arreglo de imagenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Valorant'));
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
});
```

- **Propósito:**  
  Verificar que el hook actualice el estado correctamente cuando se cargan los GIFs.

- **Conceptos Clave:**
  - **`waitFor`:** Espera a que se cumpla una condición antes de continuar con el test.
  - **`expect(result.current.images.length).toBeGreaterThan(0)`:** Verifica que el hook haya cargado al menos un GIF.

- **Resultado Esperado:**  
  El estado debe tener `images` con elementos y `isLoading: false`.

---

### **6. Pruebas en `<GifExpertApp />`**

#### **Propósito General:**
Verificar que la aplicación principal `<GifExpertApp />` funcione correctamente, incluyendo la renderización del título y la gestión de categorías.

---

#### **Prueba 1: `Debe renderizar el título correctamente`**
```javascript
test('Debe renderizar el título correctamente', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('GifExpertApp')).toBeTruthy();
});
```

- **Propósito:**  
  Verificar que el título de la aplicación se renderice correctamente.

- **Conceptos Clave:**
  - **`screen.getByText('GifExpertApp')`:** Verifica que el texto `'GifExpertApp'` esté presente.

- **Resultado Esperado:**  
  El título debe estar visible.

---

#### **Prueba 2: `Debe agregar una nueva categoría`**
```javascript
test('Debe agregar una nueva categoría', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Dragon Ball' } });
    fireEvent.submit(input);
    expect(screen.getByText('Dragon Ball')).toBeTruthy();
});
```

- **Propósito:**  
  Verificar que el componente permita agregar una nueva categoría.

- **Conceptos Clave:**
  - **`fireEvent.change`:** Simula un cambio en el input.
  - **`fireEvent.submit`:** Simula el envío del formulario.

- **Resultado Esperado:**  
  La categoría `'Dragon Ball'` debe ser agregada y mostrada.

---

#### **Prueba 3: `No debe agregar categorías duplicadas`**
```javascript
test('No debe agregar categorías duplicadas', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'One Punch Man' } });
    fireEvent.submit(input);
    fireEvent.change(input, { target: { value: 'One Punch Man' } });
    fireEvent.submit(input);
    const categories = screen.queryAllByText('One Punch Man');
    expect(categories).toHaveLength(1);
});
```

- **Propósito:**  
  Verificar que el componente no permita agregar categorías duplicadas.

- **Conceptos Clave:**
  - **`screen.queryAllByText('One Punch Man')`:** Selecciona todos los elementos que contienen el texto `'One Punch Man'`.
  - **`expect(categories).toHaveLength(1)`:** Verifica que solo haya una instancia de la categoría.

- **Resultado Esperado:**  
  La categoría `'One Punch Man'` no debe duplicarse.
