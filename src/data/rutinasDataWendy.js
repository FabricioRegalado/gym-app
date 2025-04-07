// data/rutinasData.js

const rutinasData = [
  {
    dia: "Lunes",
    titulo: "Cudriceps",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Cuadriceps | Multiarticular",
          ejercicios: [
            {
              nombre: "Setadilla Smith",
              series: [
                { descripcion: "Bloque 1: Aproximacion", cantidad: "1 serie", repeticiones: "15 - 20 reps" },
                { descripcion: "Bloque 2: Efectivas", cantidad: "2 series", repeticiones: "6 - 10 reps" },
                { descripcion: "Bloque 3: RestPause", cantidad: "1 series", repeticiones: "6 - 8 reps" },
              ],
              detalle: [
                "Bloque 1: Peso -> 25lb por lado | peso inicial para articular completamente | subiendo y bajando en 2s.",
                "Bloque 2: Peso -> 35lb / 45lb por lado | Carga pesada y controlada | NOTA: subiendo en 1s y bajando en 3s.",
                "Bloque 3: Peso -> 25lb / 30lb por lado | Carga neutra y controlada | NOTA: Para realizar el restpasue es realizar las repeticiones que se indican, despues descansas 10 / 15s, vuelves a realizar las mismas reps y vuelves a descansar 10 / 15s y vuelves a intentar a sacar las mismas reps.",
              ],
              descanso: "2 minutos y medio",
              link: "https://www.lyfta.app/es/exercise/sentadilla-en-silla-smith-6u0/"
            },
            {
              nombre: "Desplantes con mancuernas",
              series: [
                { descripcion: "Unico Bloque: Efectivas", cantidad: "3 series", repeticiones: "24 pasos" },
                
              ],
              detalle: [
                "Unico Bloque: Peso -> Mancueras | 25 / 30 lbs | NOTA: al bajar cuenta 3s y al subir 1s.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/zancadas-caminando-sin-equipo/"
            },
          ]
        },
        {
          grupoMuscular: "Cuadriceps | Aislados",
          ejercicios: [
            {
              nombre: "Extensiones de cuadriceps",
              series: [
                { descripcion: "Bloque 1: Aproximación", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: Efectivas", cantidad: "3 series", repeticiones: "8 - 12 reps" }
              ],
              detalle: [
                "Bloque 1: Peso -> 3 - 4 placas | Carga moderada, solo para aproximar | NOTA: subes en 2s, mantienes 3s y bajas en 3s .",
                "Bloque 2: Peso -> 5 - 7 placas | Carga exigente | NOTA: subes en 1s, mantienes 2s y bajas en 3s."
              ],
              descanso: "2 minutos y medio",
              link: "https://www.lyfta.app/exercise/lever-leg-extension-0b"
            },
            {
              nombre: "Prensa",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: " 3 series ", repeticiones: "10 - 15 reps" },
                { descripcion: "Bloque 2: Resistencias", cantidad: " 1 serie ", repeticiones: "1 + 1s | 2 + 2s | ... 8 + 8s" },

              ],
              detalle: [
                "Bloque 1: Peso -> 2 discos de 45lb/20kg por lado | Carga exigente y controladas | NOTA: subes en 1s y bajas en 3s",
                "Bloque 2: Peso -> 1 disco de 45lb/20kg por lado + 20lb por lado | Carga neutra para resistencia | NOTA: realizas una rep y te quedas 1s abajo, luego 2 reps y te quedas 2s abajo, 3 reps y 3s abajo hasta llegar a 8 y 8s | OJO: que tus rodillas no peguen en tu pecho cuando realices los segundos abajo.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-pierna/"
            },
            {
              nombre: "Aductor en maquina",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: " 4 series ", repeticiones: "10s + 10 - 15 reps" },
              ],
              detalle: [
                "Bloque 1: Peso -> 5 - 7 placas | Carga neutra y controladas | NOTA: dejas las piernas cerradas 10s y despues realizas las repeticiones abriendo y cerrando lo mas lento posible.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/aductores-en-maquina/"
            },
            {
              nombre: "Pantorillas en maquina de pie",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "4 series", repeticiones: "15 - 20 reps" }
              ],
              detalle: [
                "Bloque 1: Peso -> 8 / 12 placas | Carga neutra | NOTA: subes en 1s, mantienes 3s y bajas en 3s.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/elevacion-de-talones-de-pie-en-maquina/"
            },
          ]
        }
      ]
    }
  },
  {
    dia: "Martes",
    titulo: "Pendiente",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Cuadriceps",
          ejercicios: [
            {
              nombre: "Sentadilla Smith",
              series: [
                { descripcion: "Bloque 1: Aproximación", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: Efectivas", cantidad: "3 series", repeticiones: "8 - 12 reps" },
                { descripcion: "Bloque 3: Ascendente - descentente", cantidad: "1 serie", repeticiones: "6 - 12 - 6 reps" },
              ],
              detalle: [
                "Bloque 1: Carga neutra, subir y bajar en 2s.",
                "Bloque 2: Carga pesada, subiendo en 1s y bajando en 3s.",
                "Bloque 3: Carga neutra + pesada, Realizas 6 reps (pesadas), quitas discos y haces 12 reps, vuelves a colocar los discos e intentas sacar 6 .",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/sentadilla-hack-squat/"
            },
            {
              nombre: "Sissy Squat",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "4 series", repeticiones: " 10 reps - fallo" },
              ],
              detalle: [
                "Bloque 1: Disco pesado, realiza las repeticions abrazando un disco de tal manera de asegurar las 10 y lograr fallo.",
              ],
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/sentadilla-asistida-con-mancuerna-pierna/"
            },
            {
              nombre: "Extensión de cuadriceps",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "8 reps - fallo" },
                { descripcion: "Bloque 2: Piramide", cantidad: "1 serie", repeticiones: "6, 8, 12, 8, 6, reps" },
              ],
              detalle: [
                "Bloque 1: Carga pesada, subiendo en 1s y bajando en 3s.",
                "Bloque 2: Juego de pesos, iniciamos pesado, luego disminuimos el peso y aumentamos las repeticiones, asi hasata completar el bloque entero.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/extension-de-piernas-en-maquina/"
            },
            {
              nombre: "Sentadilla perfecta (enfoque cuadriceps)",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "15 - 20 reps" }
              ],
              detalle: [
                "Bloque 1: Carga neutra, subiendo y bajando en 2s.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/zancadas-con-mancuernas-caminando/"
            },
            {
              nombre: "Pantorrillas (máquina costurera)",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "10 - fallo" }
              ],
              detalle: [
                "Baja en 3s y sube en 1s, manteniendo el control."
              ],
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/extension-de-gemelos-sentado-en-maquina-pierna/"
            },
            
          ]
        }
      ]
    }
  },
  {
    dia: "Miércoles",
    titulo: "Pendiente",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Press Militar con mancuernas",
              series: [
                { descripcion: "Serie de aproximación", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Pesadas y controladas", cantidad: "3 series", repeticiones: "6 - 8 reps" }
              ],
              detalle: "1er serie de aproximacion, las 3 series restantes son pesadas y controladas (3s al bajar y 1s al subir), puedes rematar con un pequeño dropset en la ultima serie",
              descanso: "2 minutos ",
              link: "https://eresfitness.com/press-militar-con-mancuernas-o-barra/"
            },
            {
              nombre: "Vuelos laterales",
              series: [
                { descripcion: "Pesadas y controladas", cantidad: "4 series", repeticiones: "8 - 10 reps" },
                { descripcion: "Fallo con peso menor", cantidad: "4 series", repeticiones: "10 reps + fallo" }
              ],
              detalle: " Las 8 - 10 reps son pesadas y controladas, el fallo es con un peso menor pero subiendo y bajando en 1s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },
            {
              nombre: "Remo a la barbilla con barra",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "12 - 15 reps" }
              ],
              detalle: "Sube en 2a y baja en 3s, realiza fallo con el mismo peso pero en 1s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/remo-al-cuello-con-polea-baja/"
            },
            {
              nombre: "Vuelos laterales individual (recargado en un pilar)",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "8 - 10 reps" }
              ],
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
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "8 - fallo" }
              ],
              detalle: "Subes en 1s sostienes 2s y bajas en 3s",
              descanso: "2 minutos ",
              link: "https://eresfitness.com/curl-de-biceps-en-banco-scott/"
            },
            {
              nombre: "Rompe Craneos con barra z",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "6 - 8 reps + fallo" }
              ],
              detalle: " Las 6 - 8 reps son controladas (3s al bajar, 2s al subir) y el fallo se realiza en 1s ambos movimientos",
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-frances-con-polea-baja/"
            },
            {
              nombre: "Curl con barra z (agarre prono)",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "10 reps + 10s + 10 reps" }
              ],
              detalle: "Las 10 reps son subiendo y bajando en 2s y los segundos se mantienen a medias",
              descanso: "2 minutos",
              link: "https://eresfitness.com/curl-de-biceps-invertido-con-barra/"
            },
            {
              nombre: "Pata unilateral en polea alta",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "12 - 15 reps" }
              ],
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
    titulo: "Pendiente",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Press en banco inclinado con barra",
              series: [
                { descripcion: "Controladas", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Pesadas y controladas", cantidad: "2 series", repeticiones: "8 - fallo" },
                { descripcion: "DropSet", cantidad: "1 serie", repeticiones: "6 reps c/u" }
              ],
              detalle: "Primer bloque controlada (subiendo y bajando en 2s), segundo bloque pesado y controlado (3s al bajar y 1s al subir) y el dropset es quitarle un disco menos y realizar el ejercicios con un tempo de 1s (subir y bajar en 1s)",
              descanso: "2 minutos y medio de descanso",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-barra/"
            },
            {
              nombre: "Banco banco plano con mancuernas",
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "8 reps - fallo" }
              ],
              detalle: "Controlando el movimiento, bajando en 3s y subiendo en 1s",
              descanso: "1 minuto y medio ",
              link: "https://fitcron.com/exercise/press-cerrado-neutro-con-mancuernas-pectoral/"
            },
            {
              nombre: "Cruces en poleas",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "10 reps + 10 reps (apuntando para abajo)" }
              ],
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
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Control total del movimiento, mantenemos 2s arriba y bajamos en 3s (puedes rematar con repeticiones explosivas)",
              descanso: "2 minutos",
              link: "https://eresfitness.com/remo-con-barra-recta/"
            },
            {
              nombre: "Pull Over (Cuerdita para espalda)",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "8 reps + fallo" }
              ],
              detalle: "Las 8 reps son lentas y controladas, el fallo metes explocividad pero con el mismo peso",
              descanso: "2 minutos",
              link: "https://www.simplyfitness.com/es/pages/rope-pulldown"
            },
            {
              nombre: "Remo individual con mancuerna + dobles",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "10 reps + fallo" }
              ],
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
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "10 reps" }
              ],
              detalle: "Los brazos inician en forma de martillo y cuando vas subiendo rotas la muñeca, (aprieta 2s arriba / carga pesada)",
              descanso: "2 minutos",
              link: "https://eresfitness.com/curl-alternado-con-mancuerna/"
            },
            {
              nombre: "Curl Spider (agarre invertido)",
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "6 reps + 6s sosteniendo + 6 reps" }
              ],
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
    titulo: "Pendiente",
    duracion: "65 min",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Femoral",
          ejercicios: [
            {
              nombre: "Peso muerto con mancuernas",
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "6 reps individuales + fallo dobles" }
              ],
              detalle: "Controla la bajada lentamente al igual que la subida",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/peso-muerto-rumano-con-mancuernas-pierna/"
            },
            {
              nombre: "Maquina de femoral acostado",
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "8 - 10 reps + fallo explosivas" }
              ],
              detalle: "Control total del movimiento, apretando 2s al final de cada repetición y bajando en 3s",
              descanso: "2 minutos de descanso",
              link: "https://eresfitness.com/curl-femoral-acostado-en-maquina/"
            },
            {
              nombre: "Bulgaras",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "21´s" }
              ],
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
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "10 reps + fallo explosivo" }
              ],
              detalle: "las 10 reps son pesadas y controladas, el fallo es explosivo con el mismo peso",
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-militar-con-mancuernas-o-barra/"
            },
            {
              nombre: "Vuelos laterales con mancuernas",
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "15 a 20 reps" }
              ],
              detalle: "Cuando ya sientas que llegas al fallo, realizalas explosivas",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },
            {
              nombre: "Vuelos posteriores en poleas",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "15 reps + fallo" }
              ],
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
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Bajando y estirando en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/extension-en-polea-con-cuerda-sobre-la-cabeza/"
            },
            {
              nombre: "Triangulo para triceps",
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "12 - 15 reps" }
              ],
              detalle: "Realiza el movimiento, subiendo y bajando en 2s",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extensiones-de-triceps-con-agarre-en-v-en-polea/"
            },
            {
              nombre: "Cuerda para triceps (a una mano)",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "15 reps + fallo" }
              ],
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
