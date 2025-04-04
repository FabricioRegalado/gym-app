// data/rutinasData.js

const rutinasData = [
  {
    dia: "Lunes",
    titulo: "Pecho - Espalda",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Press banco plano con mancuernas",
              series: ["4 series"],
              repeticiones: ["5 reps", "----------", "8 - 12 reps"],
              detalle: [
                "Las 5 reps son pesadas y controladas.",
                "Las 8 - 12 reps son al fallo (con mancuernas más ligeras)."
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-banca-con-mancuernas/"
            },
            {
              nombre: "Press de banco inclinado con barra",
              series: ["3 series"],
              repeticiones: ["8 - 10 reps"],
              detalle: [
                "Son a fallo y controlando la subida y bajada (lo más lento posible)."
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-barra/"
            },
            {
              nombre: "Aperturas pec deck de pecho",
              series: ["4 series"],
              repeticiones: ["8 - 12 reps"],
              detalle: [
                "Subiendo y bajando en 2s y apretando 2s al final de cada repetición."
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/aperturas-peck-deck-de-pecho/"
            }
          ]
        },
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Remo con barra recta",
              series: ["1 serie", "----------", "4 series"],
              repeticiones: ["12 - 15 reps", "+", "6 - fallo"],
              detalle: [
                "La serie de 12 - 15 reps es de aproximación.",
                "La de 6 - fallo es exigente."
              ],
              descanso: "2 minutos y medio de descanso",
              link: "https://eresfitness.com/remo-con-barra-recta/"
            },
            {
              nombre: "Jalón Abierto Neutro en Polea Alta",
              series: ["3 series", "+ DropSet"],
              repeticiones: ["6-8 reps (exigentes)", "+", "8 - fallo"],
              detalle: [
                "Las primeras series son pesadas y controladas.",
                "El dropset es con una placa menos y tempo de 1s (subir y bajar en 1s)."
              ],
              descanso: "2 minutos y medio de descanso",
              link: "https://fitcron.com/exercise/jalon-abierto-neutro-en-polea-alta-dorsal/"
            },
            {
              nombre: "Jalón Aislado en Polea Alta",
              series: ["4 series"],
              repeticiones: ["10 reps + 15 reps"],
              detalle: [
                "10 reps subiendo y bajando en 2s.",
                "15 reps subiendo y bajando en 1s."
              ],
              descanso: "2 minutos y medio de descanso",
              link: "https://fitcron.com/exercise/jalon-aislado-prono-supino-en-polea-alta-dorsal/"
            },
            {
              nombre: "Pull over",
              series: ["3 series"],
              repeticiones: ["8 - 10 reps + fallo"],
              detalle: [
                "Realiza 8 - 10 reps controladas.",
                "El fallo es con el mismo peso, subiendo y bajando en 1s."
              ],
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/serratos-con-cuerda-en-polea-dorsal/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Martes",
    titulo: "Pierna (enfoque Cuadriceps)",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Cuadriceps",
          ejercicios: [
            {
              nombre: "Sentadilla Hack Squat",
              series: ["1 serie", "---------", "3 series"],
              repeticiones: ["15 reps", "---------", "8-10 reps"],
              detalle: [
                "1er serie de aproximación.",
                "Las 3 series restantes son pesadas y controladas (3s al bajar y 1s al subir)."
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/sentadilla-hack-squat/"
            },
            {
              nombre: "Sissy Squat",
              series: ["3 series"],
              repeticiones: ["8 reps + fallo"],
              detalle: [
                "8 reps controladas y con peso.",
                "El fallo es sin peso."
              ],
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/sentadilla-asistida-con-mancuerna-pierna/"
            },
            {
              nombre: "Extensión de cuadriceps",
              series: ["3 series"],
              repeticiones: ["8 - fallo"],
              detalle: [
                "Subir en 1s y bajar en 3s.",
                "El fallo puedes realizarlo en 1s al subir y bajar."
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/extension-de-piernas-en-maquina/"
            },
            {
              nombre: "Desplantes caminando",
              series: ["3 series"],
              repeticiones: ["24 pasos"],
              detalle: [
                "Baja en 3s y sube en 1s, manteniendo el equilibrio."
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/zancadas-con-mancuernas-caminando/"
            },
            {
              nombre: "Pantorrillas (máquina costurera)",
              series: ["3 series"],
              repeticiones: ["10 - fallo"],
              detalle: [
                "Baja en 3s y sube en 1s, manteniendo el control."
              ],
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/extension-de-gemelos-sentado-en-maquina-pierna/"
            },
            {
              nombre: "Femoral acostado",
              series: ["3 series"],
              repeticiones: ["15 reps"],
              detalle: [
                "Baja en 3s y sube en 1s, manteniendo el control."
              ],
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/curl-femoral-horizontal-en-maquina-pierna/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Miércoles",
    titulo: "Hombro - Brazo",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Press Militar con mancuernas",
              series: ["1 serie", "3 series"],
              repeticiones: ["15 reps", "6 - 8 reps"],
              detalle: "1er serie de aproximacion, las 3 series restantes son pesadas y controladas (3s al bajar y 1s al subir), puedes rematar con un pequeño dropset en la ultima serie",
              descanso: "2 minutos ",
              link: "https://eresfitness.com/press-militar-con-mancuernas-o-barra/"
            },
            {
              nombre: "Vuelos laterales",
              series: ["4 series"],
              repeticiones: ["8 - 10 reps "," 10 reps + fallo "],
              detalle: " Las 8 - 10 reps son pesadas y controladas, el fallo es con un peso menor pero subiendo y bajando en 1s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },
            {
              nombre: "Remo a la barbilla con barra",
              series: ["3 series"],
              repeticiones: ["12 - 15 reps"],
              detalle: "Sube en 2a y baja en 3s, realiza fallo con el mismo peso pero en 1s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/remo-al-cuello-con-polea-baja/"
            },
            {
              nombre: "Vuelos laterales individual (recargado en un pilar)",
              series: ["3 series"],
              repeticiones: ["8 - 10 reps"],
              detalle: "Control total del movimiento, aguantando 2s arriba y bajando en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },          
          ]
        },
        {
          grupoMuscular: "Bicep - Tricep Biseries (realiza uno y uno)",
          ejercicios: [
            {
              nombre: "Curl predicador con barra z",
              series: ["3 series"],
              repeticiones: ["8 - fallo"],
              detalle: "Subes en 1s sostienes 2s y bajas en 3s",
              descanso: "2 minutos ",
              link: "https://eresfitness.com/curl-de-biceps-en-banco-scott/"
            },
            {
              nombre: "Rompe Craneos con barra z",
              series: ["3 series"],
              repeticiones: [" 6 - 8 reps + fallo"],
              detalle: " Las 6 - 8 reps son controladas (3s al bajar, 2s al subir) y el fallo se realiza en 1s ambos movimientos",
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-frances-con-polea-baja/"
            },
            {
              nombre: "Curl con barra z (agarre prono)",
              series: ["3 series"],
              repeticiones: ["10 reps + 10s + 10 reps"],
              detalle: "Las 10 reps son subiendo y bajando en 2s y los segundos se mantienen a medias",
              descanso: "2 minutos",
              link: "https://eresfitness.com/curl-de-biceps-invertido-con-barra/"
            },
            {
              nombre: "Pata unilateral en polea alta",
              series: ["3 series"],
              repeticiones: ["12 - 15 reps"],
              detalle: "Bajas en 3s, aprietas 2s, subes en 3s y sostienes 2s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/extension-de-triceps-a-una-mano-en-polea-agarre-cuerda/"
            },          
          ]
        }
      ]
    }
  },
  {
    dia: "Jueves",
    titulo: "Pecho - Espalda - Biceps",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Press en banco inclinado con barra",
              series: ["1 serie", "2 series", "1 serie"],
              repeticiones: ["15 reps"," 8 - fallo","DropSet de 6 reps c/u"],
              detalle: "Primer bloque controlada (subiendo y bajando en 2s), segundo bloque pesado y controlado (3s al bajar y 1s al subir) y el dropset es quitarle un disco menos y realizar el ejercicios con un tempo de 1s (subir y bajar en 1s)",
              descanso: "2 minutos y medio de descanso",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-barra/"
            },
            {
              nombre: "Banco banco plano con mancuernas",
              series: ["4 series"],
              repeticiones: ["8 resps - fallo"],
              detalle: "Controlando el movimiento, bajando en 3s y subiendo en 1s",
              descanso: "1 minuto y medio ",
              link: "https://fitcron.com/exercise/press-cerrado-neutro-con-mancuernas-pectoral/"
            },
            {
              nombre: "Cruces en poleas",
              series: ["3 series"],
              repeticiones: ["10 reps + 10 reps (apuntando para abajow)"],
              detalle: "Primero se trabajan 10 reps comunes y le sumamos 10 reps pero apuntando para abajo (esto es para trabajar la parte superior del pectoral)",
              descanso: "1 minuto y medio ",
              link: "https://fitcron.com/exercise/aperturas-con-bandas-pectoral/"
            }
          ]
        },
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Remo libre(agarre abierto)",
              series: ["4 series"],
              repeticiones: ["8 - 10 reps"],
              detalle: "Control total del movimiento, mantenemos 2s arriba y bajamos en 3s (puedes rematar con repeticiones explosivas)",
              descanso: "2 minutos",
              link: "https://eresfitness.com/remo-con-barra-recta/"
            },
            {
              nombre: "Pull Over (Cuerdita para espalda)",
              series: ["3 series"],
              repeticiones: ["8 reps + fallo "],
              detalle: "Las 8 reps son lentas y controladas, el fallo metes explocividad pero con el mismo peso",
              descanso: "2 minutos",
              link: "https://www.simplyfitness.com/es/pages/rope-pulldown"
            },
            {
              nombre: [ " Remo individual con mancuerna + dobles"],
              series: ["3 series"],
              repeticiones: [" 10 reps + fallo "],
              detalle: "Primero trabajamos los jalones individuales y despues tomamos el par de mancuernas para trabajar a fallo dobles",
              descanso: "2 minuto y medio",
              link: "https://eresfitness.com/remo-con-mancuerna-unilateral/"
            },
          ]
        },
        {
          grupoMuscular: "Biceps",
          ejercicios: [
            {
              nombre: "Curl individual con mancuerna (con rotacion)",
              series: ["4 series"],
              repeticiones: ["10 reps"],
              detalle: "Los brazos inician en forma de martillo y cuando vas subiendo rotas la muñeca, (aprieta 2s arriba / carga pesada)",
              descanso: "2 minutos",
              link: "https://eresfitness.com/curl-alternado-con-mancuerna/"
            },
            {
              nombre: "Curl Spider (agarre invertido)",
              series: ["4 series"],
              repeticiones: [" 6 reps + 6s sosteniendo + 6 reps"],
              detalle: "Te colocas en el banco incliando acostado boca abajo, y con la barra z junto con los brazos colgando ejecutas el curl, cuando sostengas los brazos deben de quedar a medias, no olvides que debes de estirar el brazo completo sin mover el codo",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/curl-spider-en-pronacion-con-barra-biceps/"
            },
            
          ]
        }
      ]
    }
  },
  {
    dia: "Viernes",
    titulo: "Femoral - Hombros - Triceps",
    duracion: "65 min",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Femoral",
          ejercicios: [
            {
              nombre: "Peso muerto con mancuernas",
              series: ["4 series"],
              repeticiones: ["6 reps individuales + fallo dobles"],
              detalle: "Controla la bajada lentamente al igual que la subida",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/peso-muerto-rumano-con-mancuernas-pierna/"
            },
            {
              nombre: "Maquina de femoral acostado",
              series: ["4 series"],
              repeticiones: ["8 - 10 reps + fallo explosivas"],
              detalle: "Control total del movimiento, apretando 2s al final de cada repetición y bajando en 3s",
              descanso: "2 minutos de descanso",
              link: "https://eresfitness.com/curl-femoral-acostado-en-maquina/"
            },
            {
              nombre: "Bulgaras",
              series: ["3 series"],
              repeticiones: ["21´s"],
              detalle: "7 con dos mancuernas, 7 con una mancuerna y 7 sin peso",
              descanso: "2 minutos y medio",
              link: "https://eresfitness.com/sentadilla-bulgara-sin-equipo/"
            },
            
          ]
        },
        {
          grupoMuscular: "Hombros",
          ejercicios: [
            {
              nombre: "Press con mancuernas para hombro",
              series: ["4 series"],
              repeticiones: ["10 reps + fallo explosivo"],
              detalle: "las 10 reps son pesadas y controladas, el fallo es explosivo con el mismo peso",
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-militar-con-mancuernas-o-barra/"
            },
            {
              nombre: "Vuelos laterales con mancuernas",
              series: ["4 series"],
              repeticiones: ["15 a 20 reps"],
              detalle: "Cuando ya sientas que llegas al fallo, realizalas explosivas",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },
            {
              nombre: "Vuelos posteriores en poleas",
              series: ["3 series"],
              repeticiones: ["15 reps + fallo "],
              detalle: "Control total del movimiento y fallo explosivo",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/aperturas-posteriores-en-polea/"
            }
          ]
        },
        {
          grupoMuscular: "Tricpes",
          ejercicios: [
            {
              nombre: "Jalon tras nuca en polea alta con cuerda",
              series: ["4 series"],
              repeticiones: ["8 - 10 reps"],
              detalle: "Bajando y estirando en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/extension-en-polea-con-cuerda-sobre-la-cabeza/"
            },
            {
              nombre: "Triangulo para triceps",
              series: ["4 series"],
              repeticiones: ["12 - 15 reps"],
              detalle: "Realiza el movimiento, subiendo y bajando en 2s",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extensiones-de-triceps-con-agarre-en-v-en-polea/"
            },
            {
              nombre: "Cuerda para triceps (a una mano)",
              series: ["3 series"],
              repeticiones: ["15 reps + fallo "],
              detalle: "Realiza el movimiento, subiendo y bajando en 1|s",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extension-de-triceps-a-una-mano-en-polea-agarre-cuerda/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Sábado",
    titulo: "Descanso Activo",
    duracion: "30 min",
    tipo: "general",
    contenido: {
      ejercicios: [
        "Estiramientos dinámicos",
        "Caminata ligera",
        "Yoga o movilidad"
      ]
    }
  },
  {
    dia: "Domingo",
    titulo: "Día de Descanso",
    duracion: "",
    tipo: "general",
    contenido: {
      ejercicios: [
        "Relajación",
        "Meditación",
        "Preparación para la semana"
      ]
    }
  }
];

export default rutinasData;
