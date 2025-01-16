---
slug: regular-vs-arrow
title: Diferencia entre funciones normales y funciones flecha en javascript
authors: [juanjo]
tags: [javascript, frontend, conceptos-basicos]
image: ./functions.png
hide_table_of_contents: false
---

![funciones JS](./functions.png)

La diferencia principal entre una **funcion flecha - arrow function** y una **función normal** en JavaScript <!-- truncate --> radica en cómo manejan el contexto de **`this`**, aunque también hay diferencias de sintaxis.

### 1. **Sintaxis**

- **Función normal**:

  ```javascript
  function sumar(a, b) {
    return a + b;
  }
  ```

- **Funcion flecha - Arrow function**:

  ```jsx showLineNumbers
  const sumar = (a, b) => {
    return a + b;
  };
  ```

  **Diferencias:**

  - Las **arrow functions** pueden tener una sintaxis más corta.
  - Si solo tienen una expresión, el resultado se retorna automáticamente (sin necesidad de usar `return`), esto se conoce como **retorno implícito**:
    ```jsx
    const sumar = (a, b) => a + b;
    ```
  - Si hay un solo parámetro, se pueden omitir los paréntesis:

    ```javascript
    const cuadrado = (x) => x * x;
    ```

    <br></br>

    ### Veamos la transformación de una función normal a una función flecha en su mínima expreción:

    1. Función normal

       ```javascript
       function sumar(a, b) {
         return a + b;
       }
       ```

    2. Convirtiendola en función flecha

       ```jsx showLineNumbers
       const sumar = (a, b) => {
         return a + b;
       };
       ```

    3. Al solo retornar una expreión se deja el retorno implícito

       ```jsx showLineNumbers
       const sumar = (a, b) => a + b;
       ```
    4. 

  <br></br>

### 2. **`this` y el contexto**

- **Función normal**:

  El valor de `this` depende de cómo se llama a la función. Puede cambiar según el contexto, por ejemplo, si se usa en un objeto, evento o función constructora.

  ```javascript
  const obj = {
    valor: 10,
    sumar: function () {
      return this.valor + 5;
    },
  };

  console.log(obj.sumar()); // 15
  ```

- **Arrow function**:

  Al utilizar una función de flecha esta no crea automáticamente una variable `this`. Como resultado, cualquier referencia a `this` apuntaría a lo que `this` era antes de que se creara la función

  ```javascript
  const obj = {
    valor: 10,
    sumar: () => this.valor + 5, // `this` no apunta al objeto
  };

  console.log(obj.sumar()); // NaN, porque `this.valor` es undefined
  ```

  ```javascript
  const obj = {
    nombre: 'Juanjo',
    print: () => console.log(this) // `this` no apunta al objeto
  };

  console.log(obj.print()); // Window (objeto global)
  ```

  Esto hace que las **arrow functions** sean ideales para callbacks, como en los métodos de array o los manejadores de eventos, donde no se desea que `this` cambie.
  <br></br>

### 3. **Uso con constructores**

- **Función normal**:
  Se pueden usar funciones normales como constructores con `new`.

  ```javascript
  function Persona(nombre) {
    this.nombre = nombre;
  }
  const persona = new Persona("Juan");
  console.log(persona.nombre); // "Juan"
  ```

- **Arrow function**:
  No se pueden usar como constructores y lanzan un error si intentas hacerlo.

  ```javascript
  const Persona = (nombre) => {
    this.nombre = nombre;
  };
  const persona = new Persona("Juan"); // Error: Persona is not a constructor
  ```

  <br></br>

### 4. **`arguments`**

- **Función normal**:
  Las funciones normales tienen acceso al objeto especial `arguments`, que contiene los parámetros pasados.

  ```javascript
  function sumar() {
    return Array.from(arguments).reduce((a, b) => a + b);
  }

  console.log(sumar(1, 2, 3)); // 6
  ```

- **Arrow function**:
  Las arrow functions no tienen `arguments`, pero se puede usar el operador [**rest**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters) agregado en la versión de Ecmascript 2015 ES5 (`...args`).

  ```javascript
  const sumar = (...args) => args.reduce((a, b) => a + b);

  console.log(sumar(1, 2, 3)); // 6
  ```

### Resumen:

| Característica       | Función Normal                    | Arrow Function                |
| -------------------- | --------------------------------- | ----------------------------- |
| Sintaxis             | Verbosa                           | Más corta                     |
| `this`               | Depende del contexto de ejecución | Hereda el `this` del contexto |
| Uso como constructor | Permitido                         | No permitido                  |
| `arguments`          | Disponible                        | No disponible, usa `...args`  |
| Retorno implícito    | No                                | Sí, si es una sola expresión  |
