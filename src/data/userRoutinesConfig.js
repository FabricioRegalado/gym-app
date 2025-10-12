// Configuración que mapea cada usuario a su archivo de rutinas personalizado
import rutinasData from './rutinasData';
import rutinasDataRicardo from './rutinasDataRicardo';
import rutinasDataWendy from './rutinasDataWendy';
import rutinasDataEustolio from './rutinasDataEustolio';

/**
 * Mapeo de usuarios a sus datos de rutinas
 * Si un usuario no tiene rutinas personalizadas, se le asignan las rutinas por defecto
 */
export const userRoutineMap = {
  'admin': rutinasData,           // Rutinas por defecto para admin
  'rodrigo': rutinasData,         // Rutinas por defecto para rodrigo
  'david': rutinasData,           // Rutinas por defecto para david
  'efrain': rutinasDataEustolio,  // Rutinas personalizadas para efrain (Eustolio)
  'eustolio': rutinasDataEustolio, // Rutinas personalizadas para eustolio (mismo que efrain)
  'luis': rutinasData,            // Rutinas por defecto para luis
  'ricardo': rutinasDataRicardo,  // Rutinas personalizadas para ricardo
  'wendy': rutinasDataWendy,      // Rutinas personalizadas para wendy
};

/**
 * Obtiene las rutinas para un usuario específico
 * @param {string} username - Nombre de usuario
 * @returns {Array} - Array de rutinas del usuario
 */
export const getUserRoutines = (username) => {
  if (!username) {
    console.warn('No se proporcionó un nombre de usuario, usando rutinas por defecto');
    return rutinasData;
  }
  
  const userRutinas = userRoutineMap[username.toLowerCase()];
  
  if (!userRutinas) {
    console.warn(`No se encontraron rutinas para el usuario "${username}", usando rutinas por defecto`);
    return rutinasData;
  }
  
  return userRutinas;
};

export default userRoutineMap;
