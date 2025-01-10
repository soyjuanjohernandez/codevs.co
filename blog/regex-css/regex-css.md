---
slug: regex-in-css
title: Expresiones regulares en CSS
authors: [juanjo]
tags: [css, regex, expresiones-regulares,frontend, ]
image: ./header_regex_css.PNG
hide_table_of_contents: false
---

![](./header_regex_css.PNG)

Las expresiones regulares, también llamadas regex, son una herramienta poderosa para buscar y manipular textos. Aunque las expresiones regulares no son nativas de CSS, se pueden utilizar en combinación con **selectores de atributos** para aplicar estilos de manera precisa.

<!-- truncate -->

En este artículo, exploraremos cómo las regex pueden ser aprovechadas en CSS para mejorar la flexibilidad y eficiencia de tus hojas de estilo.

## Selectores de Atributos en CSS

Los selectores de atributos en CSS permiten seleccionar elementos basándose en el valor de uno de sus atributos. Estos selectores son muy útiles para aplicar estilos a elementos específicos sin necesidad de añadir clases adicionales o modificar el HTML. Los selectores de atributos se escriben entre corchetes (`[]`) y pueden ser utilizados de varias maneras para lograr diferentes niveles de coincidencia.

## Tipos de Selectores de Atributos

### 1. **Selector exacto (`[attr="value"]`)**:

    Selecciona elementos cuyo atributo `attr` es exactamente igual a `value`.

    ```css title="CSS"
    a[href="https://example.com"] {
        color: red;
    }
    ```

    ```html title="HTML"
    <a href="https://example.com">Example</a>
    <a href="https://another.com">Another</a>
    ```


    :::info[Resultado]
        <div>
            <a href="https://example.com" style={{color: 'red'}}>Example</a>
        <br></br>
            <a href="https://another.com">Another</a>
        </div>
    :::

    <br></br>

### 2. **Contiene una palabra exacta (`[attr~="value"]`)**:

    Selecciona elementos cuyo atributo `attr` contiene una palabra exacta `value`.

    ```css title="CSS"
    [title~="flower"] {
        border: 1px solid red;
    }
    ```

    ```html title="HTML"
    <div title="red flower">Red Flower</div>
    <div title="blue sky">Blue Sky</div>
    ```

    :::info[Resultado]
    <div title="red flower" style={{border: '1px solid red'}}>Red Flower</div>
    <br></br>
    <div title="blue sky">Blue Sky</div>
    :::
    <br></br>

### 3. **Empieza con (`[attr^="value"]`)**:

    Selecciona elementos cuyo atributo `attr` empieza con `value`.

    ```css title="CSS"
    a[href^="https"] {
        color: green;
    }
    ```

    ```html title="HTML"
    <a href="https://example.com">Secure Link</a>
    <a href="http://example.com">Insecure Link</a>
    ```

    :::info[Resultado]
        <a href="https://example.com" style={{color: 'green'}}>Secure Link</a>
        <br></br>
        <a href="http://example.com">Insecure Link</a>
    :::

    <br></br>

### 4. **Termina con (`[attr$="value"]`)**:

    Selecciona elementos cuyo atributo `attr` termina con `value`.

    ```css title="CSS"
    a[href$=".pdf"] {
        color: red;
    }
    ```

    ```html title="HTML"
    <a href="document.pdf">PDF Document</a>
    <a href="image.png">Image</a>
    ```

    :::info[Resultado]
    <a href="document.pdf"  style={{color: 'red'}}>PDF Document</a>
    <br></br>
    <a href="image.png">Image</a>

:::

    <br></br>

### 5. **Contiene (`[attr*="value"]`)**:

    Selecciona elementos cuyo atributo `attr` contiene `value` en cualquier parte.

    ```css title="CSS"
    a[href*="example"] {
         color: red;
    }
    ```

    ```html title="HTML"
    <a href="https://example.com">Example</a>
    <a href="https://test.com">Test</a>
    ```
    :::info[Resultado]
        <a href="https://example.com" style={{color: 'red'}}>Example</a>
        <br></br>
        <a href="https://test.com">Test</a>
    :::

Estos selectores permiten una gran flexibilidad y pueden ser combinados con otros selectores para crear reglas de estilo más específicas y poderosas.
