# 🎁 Juego de Amigo Secreto

Este proyecto es una implementación sencilla en **JavaScript** para realizar un sorteo de "Amigo Secreto" desde el navegador.  
Permite **agregar nombres**, **visualizar la lista de amigos** y **sortear aleatoriamente** un participante.

---

## 📋 Características

- Añadir amigos a una lista.
- Mostrar dinámicamente la lista de amigos en pantalla.
- Elegir aleatoriamente un amigo secreto.
- Validar que no se agreguen entradas vacías.
- Mensajes de alerta cuando:
  - No se ingrese un nombre.
  - Se intente sortear sin participantes.

---

## 📂 Estructura del proyecto

El código JavaScript contiene **tres funciones principales**:

### 1. `agregarAmigo()`
- Obtiene el valor de un campo de texto con `id="amigo"`.
- Verifica que el valor no esté vacío.
- Agrega el nombre a un array `listaAmigos`.
- Limpia el campo de texto y actualiza la lista en pantalla.

### 2. `mostrarLista()`
- Muestra en un elemento `<ul>` con `id="listaAmigos"` todos los nombres guardados.
- Limpia la lista antes de volver a renderizarla.

### 3. `sortearAmigo()`
- Verifica si hay nombres en la lista.
- Genera un índice aleatorio con `Math.random()`.
- Muestra el amigo sorteado en un elemento con `id="resultado"`.

---

## 🛠 Requisitos

Para que el script funcione, tu **HTML** debe contener:
- Un `<input>` con `id="amigo"`.
- Un botón para ejecutar `agregarAmigo()`.
- Un `<ul>` con `id="listaAmigos"`.
- Un botón para ejecutar `sortearAmigo()`.
- Un `<ul>` o `<div>` con `id="resultado"` para mostrar el ganador.

Ejemplo básico de HTML:

```html
<input type="text" id="amigo" placeholder="Escribe un nombre">
<button onclick="agregarAmigo()">Agregar</button>

<ul id="listaAmigos"></ul>

<button onclick="sortearAmigo()">Sortear</button>
<ul id="resultado"></ul>