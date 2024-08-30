# Administrador de Pacientes para Veterinaria

Este proyecto es una aplicación para la gestión de pacientes en una veterinaria. Desarrollada con **React** y **TypeScript**, y creada utilizando **Vite**, esta aplicación permite registrar, visualizar, editar y eliminar pacientes de manera sencilla y eficiente.

## Deploy
Este proyecto fue deployado con Netlify se puede acceder de la siguiente url: https://66d2519d9886f0695e2f8c00--hilarious-pavlova-007ee7.netlify.app/

## Características

- **Formulario de Pacientes:** Registra nuevos pacientes a través de un formulario intuitivo.
- **Gestión de Pacientes:** Visualiza la lista de pacientes registrados, y realiza acciones como editar o eliminar cada paciente.
- **Tailwind CSS:** Estilizado moderno y responsive utilizando Tailwind para un diseño atractivo y funcional.
- **Zustand:** Manejo del estado global de la aplicación de manera sencilla y eficiente.
- **React Hook Form:** Validación de formularios para asegurar la correcta entrada de datos.
- **React Toastify:** Muestra mensajes de alerta y notificaciones de manera elegante y no intrusiva.
- **LocalStorage:** Almacenamiento local de datos para mantener la persistencia de la información de los pacientes, incluso tras recargar la página.



Actualmente, dos plugins oficiales están disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expansión de la configuración de ESLint

Si estás desarrollando una aplicación de producción, te recomendamos actualizar la configuración para habilitar reglas de lint con conocimiento de tipos:

- Configura la propiedad `parserOptions` de nivel superior de esta manera:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Reemplaza `plugin:@typescript-eslint/recommended` con `plugin:@typescript-eslint/recommended-type-checked` o `plugin:@typescript-eslint/strict-type-checked`
- Opcionalmente, agrega `plugin:@typescript-eslint/stylistic-type-checked`
- Instala [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y añade `plugin:react/recommended` & `plugin:react/jsx-runtime` a la lista de `extends`

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
