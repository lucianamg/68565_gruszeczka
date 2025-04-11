# aTempo Market

Proyecto de e-commerce ficticio desarrollado con React, Firebase y React Toastify. Permite navegar por productos, ver su detalle, agregarlos al carrito y simular una compra con formulario de envío y pago.

## Tecnologías utilizadas

- React 19
- Vite
- Firebase (Firestore)
- React Router DOM
- React Toastify

## Instalación y ejecución local

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tuUsuario/tuRepositorio.git
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Ejecutá en modo desarrollo:
   ```bash
   npm run dev
   ```

## Funcionalidades

- Vista de productos por categoría.
- Detalle de producto con botón para agregar al carrito.
- Carrito con:
  - Listado de productos agregados.
  - Eliminación individual de ítems.
  - Cálculo automático del total.
  - Formulario de datos de envío/pago.
  - Simulación de compra (con almacenamiento en Firestore).
- Toasts para feedback del usuario.

## Validaciones

El formulario de compra incluye validaciones HTML (`required`, `minLength`) antes de permitir finalizar la compra.

## Firebase

Los datos de compra se almacenan en una colección llamada `CartDetail` con los siguientes campos:

- `totalItems`
- `totalPrice`
- `items` (array de títulos)
- `datosUsuario` (datos del form)
- `timestamp`

## Despliegue

Este proyecto fue pensado para funcionar en:

### GitHub Pages
**(Estado:Cancelado)**

### Vercel
** https://68565-gruszeczka.vercel.app/**

---
