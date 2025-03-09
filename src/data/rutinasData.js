// data/rutinasData.js

import { link } from "framer-motion/client";
import { Link } from "react-router-dom";

const rutinasData = [
  {
    dia: "Lunes",
    titulo: "Pecho - Hombro - Tríceps",
    duracion: "?",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Banco inclinado con mancuernas",
              series: "1 serie / 3 series",
              repeticiones: "12-15 / 6-8 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-mancuernas/"
            },
            {
              nombre: "Cruces en poleas",
              series: "2 series / 2 series",
              repeticiones: "12-15 / 6-8 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/cruces-en-polea-alta-crossover/"
            },
            {
              nombre: "Maquina de pecho tipo hammer",
              series: "4 series",
              repeticiones: "Control total del movimiento",
              detalle:
                "Nota: Dejamos una mano arriba mientras la otra trabaja 5 reps, hacemos lo mismo en la otra mano y por último rematamos a fallo dobles",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-pecho-declinado-en-maquina/"
            }
          ]
        },
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Maquina de laterales",
              series: "2 series / 2 series",
              repeticiones:
                "10-15 / 5 reps completas + 5 reps cortas + 5 reps completas",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/elevaciones-laterales-en-maquina/"
            },
            {
              nombre: "Maquina de hombro",
              series: "2 series / 2 series",
              repeticiones:
                "12 reps / 6 reps pesadas + 8 reps (subiendo y bajando en 1s)",
              detalle: "",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-hombros-en-maquina/"
            },
            {
              nombre: "Vuelos posteriores",
              series: "4 series",
              repeticiones: "12-15 reps",
              detalle: "Lo mayor controlado posible",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/elevaciones-laterales-declinadas-en-supinacion-con-mancuernas-deltoides/"
            }
          ]
        },
        {
          grupoMuscular: "Tríceps",
          ejercicios: [
            {
              nombre: "Maneral: Barrita",
              series: "3 series",
              repeticiones: "6-8 reps",
              detalle: "Exigentes",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/extension-vertical-en-supinacion-en-polea-alta-triceps/"
            },
            {
              nombre: "Maquina predicador de triceps",
              series: "3 series",
              repeticiones: "10 reps",
              detalle: "Individual por cada brazo",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/extensiones-en-pronacion-en-maquina-triceps/"
            },
            {
              nombre: "Maneral: V (Triangulito)",
              series: "3 series",
              repeticiones: "6-8 reps",
              detalle: "Exigentes",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/extension-vertical-en-pronacion-en-polea-alta-triceps/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Martes",
    titulo: "Espalda - Bíceps",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Jalón al pecho (agarre abierto)",
              series: "2 series / 2 series",
              repeticiones: "12 / 8-10 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/jalon-en-pronacion-en-polea-alta-dorsal/"
            },
            {
              nombre: "Remo individual con mancuerna",
              series: "4 series",
              repeticiones: "10 reps c/u",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/remo-aislado-con-mancuerna-dorsal/"
            },
            {
              nombre: "Pull over con barrita",
              series: "3 series",
              repeticiones: "8 reps a fallo",
              detalle: "Manteniendo 2 segundos siempre apretando",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/rope-pulldown"
            },
            {
              nombre: "Remo en máquina",
              series: "3 series",
              repeticiones: "6 reps a fallo",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/seated-cable-row"
            }
          ]
        },
        {
          grupoMuscular: "Bíceps",
          ejercicios: [
            {
              nombre: "Curl martillo con mancuernas",
              series: "3 series",
              repeticiones:
                "5 reps individuales por brazo + fallo dobles",
              detalle: "",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/curl-en-martillo-alterno-con-mancuernas-biceps/"
            },
            {
              nombre: "Curl predicador con barra z",
              series: "3 series",
              repeticiones: "8 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/curl-en-supinacion-abierto-en-banco-scott-con-barra-z-biceps/"
            },
            {
              nombre: "Curl Spider en banco inclinado",
              series: "3 series",
              repeticiones: "12-15 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/curl-spider-en-supinacion-con-barra-z-biceps/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Miércoles",
    titulo: "Pierna",
    duracion: "55 min",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pierna",
          ejercicios: [
            {
              nombre: "Sentadilla Perfecta",
              series: "2 series / 2 series",
              repeticiones: "12 / 8 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://youtu.be/YOd3-TgJ6Mk"
            },
            {
              nombre: "Maquina de femorales recostado",
              series: "4 series",
              repeticiones: "8-10 reps",
              detalle: "",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-femoral-acostado-en-maquina/"
              
            },
            {
              nombre: "Prensa",
              series: "3 series",
              repeticiones: "8-10 reps",
              detalle: "Bajando en 3s",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-pierna/"
            },
            {
              nombre: "Pantorrillas sentado",
              series: "3 series",
              repeticiones: "15 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/elevacion-de-talones-sentado/"
            },
            {
              nombre: "Extensión de cuádriceps",
              series: "3 series",
              repeticiones: "5 a una pierna, 5 a la otra + 10 dobles",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extension-de-piernas-en-maquina/"
            },
            {
              nombre: "Peso muerto con mancuernas",
              series: "3 series",
              repeticiones: "12 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/peso-muerto-rumano-con-mancuernas/"
            },
            {
              nombre: "Abductores",
              series: "4 series",
              repeticiones: "6 reps a fallo",
              detalle: "Exigentes",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/aductores-en-maquina/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Jueves",
    titulo: "Pecho - Hombro - Triceps",
    duracion: "75 min",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Banco plano con mancuernas",
              series: "1 serie / 3 series",
              repeticiones: "15 / 8-10 reps",
              detalle: "Controlando el movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-banca-con-mancuernas/"
            },
            {
              nombre: "Banco inclinado con barra",
              series: "1 serie / 3 series",
              repeticiones: "6 / 12-15 reps",
              detalle: "Controlando el movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-barra/"
            },
            {
              nombre: "Peck deck",
              series: "3 series",
              repeticiones: "8-10 reps",
              detalle: "Apretando 2s en cada repetición",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/aperturas-peck-deck-de-pecho/"
            },
            {
              nombre: "Laterales individuales (recargado en un pilar)",
              series: "3 series",
              repeticiones: "10 reps por lado",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              Link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            }
          ]
        },
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Maquina de hombro agarre cerrado",
              series: "3 series",
              repeticiones: "8 reps a una mano, luego 8 dobles",
              detalle: "Alternando brazos",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-hombros-en-maquina/"
            },
            {
              nombre: "Maquina de laterales",
              series: "3 series",
              repeticiones: "15 reps",
              detalle: "Controlando movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/elevaciones-laterales-en-maquina/"
            }
          ]
        },
        {
          grupoMuscular: "Tríceps",
          ejercicios: [
            {
              nombre: "Maquina predicador de triceps",
              series: "4 series",
              repeticiones: "8 reps",
              detalle: "Exigentes",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extension-de-triceps-concentrado-en-maquina/"
            },
            {
              nombre: "Maneral: Cuerda para triceps tras nuca",
              series: "4 series",
              repeticiones: "12 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extension-en-polea-con-cuerda-sobre-la-cabeza/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Viernes",
    titulo: "Espalda - Biceps",
    duracion: "50 min",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Jalón al pecho (agarre neutro)",
              series: "1 serie / 3 series",
              repeticiones: "15 / 8-12 reps",
              detalle: "Subiendo en 3s",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/close-grip-pulldown"
            },
            {
              nombre: "Pull over con cuerda",
              series: "4 series",
              repeticiones: "8-10 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/rope-pulldown"
            },
            {
              nombre: "Maquina de espalda tipo hammer (maquina color morado)",
              series: "3 series",
              repeticiones: "10 reps c/u",
              detalle: "Individual",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/remo-sentado-en-maquina/"
            }
          ]
        },
        {
          grupoMuscular: "Bíceps",
          ejercicios: [
            {
              nombre: "Curl Predicador con mancuerna",
              series: "3 series",
              repeticiones: "10 reps por c/u",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-predicador-a-una-mano-con-mancuerna/"
            },
            {
              nombre: "Martillos dobles",
              series: "4 series",
              repeticiones: "8 reps",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-martillo-con-mancuernas/"
            },
            {
              nombre: "Curl de bíceps con barra z (agarre prono)",
              series: "4 series",
              repeticiones: "8 reps controladas + 8 reps parciales",
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/reverse-barbell-curl"
            }
          ]
        }
      ]
    }
  }
];

export default rutinasData;
