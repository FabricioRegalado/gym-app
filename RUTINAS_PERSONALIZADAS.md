# Sistema de Rutinas Personalizadas por Usuario

## Resumen de Cambios

Se ha implementado un sistema completo de rutinas personalizadas donde cada usuario ve únicamente sus propios datos de entrenamiento.

## Estructura del Sistema

### 1. Archivo de Configuración Central
**Ubicación:** `src/data/userRoutinesConfig.js`

Este archivo centraliza la configuración de rutinas para todos los usuarios:
- Mapea cada usuario a su archivo de rutinas correspondiente
- Proporciona la función `getUserRoutines(username)` para obtener las rutinas de cualquier usuario
- Maneja casos de error retornando rutinas por defecto si no se encuentra el usuario

### 2. Archivos de Rutinas Disponibles

| Usuario  | Archivo de Rutinas              | Estado           |
|----------|---------------------------------|------------------|
| admin    | `rutinasData.js`                | ✅ Predeterminado |
| rodrigo  | `rutinasData.js`                | ✅ Predeterminado |
| david    | `rutinasData.js`                | ✅ Predeterminado |
| efrain   | `rutinasDataEustolio.js`        | ⚠️ En construcción |
| eustolio | `rutinasDataEustolio.js`        | ⚠️ En construcción |
| luis     | `rutinasData.js`                | ✅ Predeterminado |
| ricardo  | `rutinasDataRicardo.js`         | ✅ Personalizado  |
| wendy    | `rutinasDataWendy.js`           | ✅ Personalizado  |

### 3. Componente Rutinas
**Ubicación:** `src/pages/Rutinas.jsx`

Modificaciones realizadas:
- ✅ Importa la función `getUserRoutines` desde la configuración
- ✅ Detecta el usuario actual desde sessionStorage
- ✅ Carga automáticamente las rutinas específicas del usuario
- ✅ Muestra el nombre del usuario en el encabezado
- ✅ Maneja errores de forma robusta

## Cómo Agregar Rutinas para un Nuevo Usuario

### Opción 1: Crear un Nuevo Archivo de Rutinas

1. **Crear archivo de datos:**
   ```javascript
   // src/data/rutinasDataNombreUsuario.js
   const rutinasData = [
     {
       dia: "Lunes",
       titulo: "Nombre de la Rutina",
       duracion: "60 min",
       tipo: "detallada",
       contenido: {
         secciones: [
           {
             grupoMuscular: "Grupo Muscular",
             ejercicios: [
               {
                 nombre: "Nombre del Ejercicio",
                 series: [
                   { descripcion: "Descripción", cantidad: "3 series", repeticiones: "10 reps" }
                 ],
                 detalle: ["Detalles del ejercicio"],
                 descanso: "90 segundos",
                 link: "https://ejemplo.com"
               }
             ]
           }
         ]
       }
     },
     // ... resto de los días
   ];

   export default rutinasData;
   ```

2. **Actualizar la configuración:**
   En `src/data/userRoutinesConfig.js`, agregar:
   ```javascript
   import rutinasDataNombreUsuario from './rutinasDataNombreUsuario';

   export const userRoutineMap = {
     // ... usuarios existentes
     'nombreusuario': rutinasDataNombreUsuario,
   };
   ```

3. **Agregar usuario al Login:**
   En `src/pages/Login.jsx`, agregar el usuario al array:
   ```javascript
   const users = [
     // ... usuarios existentes
     { username: 'nombreusuario', password: 'contraseña123' },
   ];
   ```

### Opción 2: Usar Rutinas Predeterminadas

Si quieres que un nuevo usuario use las rutinas por defecto:

1. En `src/data/userRoutinesConfig.js`:
   ```javascript
   export const userRoutineMap = {
     // ... usuarios existentes
     'nuevousuario': rutinasData, // Usa las rutinas predeterminadas
   };
   ```

## Características Implementadas

✅ **Carga dinámica de rutinas:** Cada usuario ve solo sus rutinas al iniciar sesión
✅ **Indicador visual:** El nombre del usuario se muestra en el encabezado
✅ **Manejo de errores robusto:** Si falla la carga, se usan rutinas predeterminadas
✅ **Sistema centralizado:** Fácil mantenimiento y escalabilidad
✅ **Configuración clara:** Estructura organizada y documentada

## Flujo de Funcionamiento

1. Usuario inicia sesión en `Login.jsx`
2. Los datos del usuario se guardan en `sessionStorage`
3. Al acceder a `Rutinas.jsx`:
   - Se recupera el nombre de usuario desde sessionStorage
   - Se llama a `getUserRoutines(username)`
   - Se cargan las rutinas específicas del usuario
   - Se muestra el nombre del usuario en el encabezado
4. El usuario ve únicamente sus rutinas personalizadas

## Próximos Pasos Sugeridos

1. **Completar rutinas de Efrain/Eustolio:** Editar `src/data/rutinasDataEustolio.js`
2. **Crear rutinas personalizadas** para Rodrigo, David, Luis y Admin si es necesario
3. **Considerar persistencia en Firebase:** Guardar progreso y rutinas en la base de datos
4. **Agregar edición de rutinas:** Permitir a los usuarios o admin editar rutinas desde la interfaz

## Notas Técnicas

- Las rutinas se cargan al montar el componente (useEffect)
- Si no hay usuario logueado, se usan rutinas predeterminadas
- El sistema es case-insensitive para los nombres de usuario
- Todos los cambios son retrocompatibles con el código existente
