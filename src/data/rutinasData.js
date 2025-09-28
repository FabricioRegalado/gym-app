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
              nombre: "Press banco inclinado con mancuernas barra",
              series: [
                { descripcion: "Bloque 1: Aproximación", cantidad: "2 series", repeticiones: "12 - 15 reps" },
                { descripcion: "Bloque 2: Efectivas", cantidad: "3 series", repeticiones: " 6 - 8 reps" },
              ],
              detalle: [
                "Controla el movimiento (bajando lo mas controlado que puedas)",
                "Ultima serie: realizar dropset"
              ],
              descanso: "1 minutos y medio",
              link: ""
            },
            {
              nombre: "Peck Fly (aperturas en maquina)",
              series: [
                { descripcion: "Bloque 1 : Efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Bloque 1: Carga exigente | aprienta 3s cuando juntas los brazos",
              ],
              descanso: "1 minuto y medio",
              link: ""
            },
            {
              nombre: "Press de pecho en maquina hammer",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "6 reps + fallo dobles" },
              ],
              detalle: [
                "Bloque 1:  Carga exigente | las 6 reps son individuales y el fallo son dobles",
              ],
              descanso: "1 minuto y medio",
              link: "https://eresfitness.com/press-de-banca-con-barra/"
            },
            
          ]
        },
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Jalon al pecho en polea (agarre abierto)",
              series: [
                
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "6 - 10 reps" }
              ],
              detalle: [
                "Bloque 1: Carga exigente | apretar 2s cuando llegues al pecho",
              ],
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Remo individual con mancuerna",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "10 reps" }
              ],
              detalle: [
                "Bloque 1: Carga exigente | apretar 2s cuando llegues a la cintura",
              ],
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Pull over, con cuerda o barra", 
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "8 - 12reps" }
              ],
              detalle: [
                "Bloque 1: Carga exigente | al llegar a la cintura aprietas 3s y regresas en lento",
              ],
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Maquina tipo hammer de espalda alta (Color morado)",
              series: [
                { descripcion: "Bloque 1: Efectivas/RestPause", cantidad: "3 series", repeticiones: "12 reps | 8 - 10 reps | 6 reps - fallo " },
              ],
              detalle: [
                "Bloque 1: Carga neutra | realizaas 12 reps (descansas 15s), relizas 8 - 10 reps (descansas 15s), realizas 6 reps - fallo (repetir en cada serie).",
              ],
              descanso: "2 minutos",
              link: ""
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Martes",
    titulo: "Pierna",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Cuadriceps",
          ejercicios: [
            {
              nombre: "Extensiones de cuadriceps en maquina",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "4 series", repeticiones: "20 reps" },
                
              ],
              detalle: [
                "Bloque 1: Carga neutra | pre fatigar el cuadriceps, realizando reps controladas, agunta 2s cuando estes arriba y bajas lento",
                
              ],
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Sentadilla Hack",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: " 8 - 10 reps" },
              ],
              detalle: [
                "Bloque 1: Carga exigente | controla la bajada lo más lento posible.",
              ],
              descanso: "2 minutos",
              link: ""
            },
            {
              nombre: " Aductores en maquina (para cuadriceps)",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "4 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Bloque 1: Carga exigente | control del movimiento y aprietas 2s al cerrar las piernas.",
              ],
              descanso: "2 minutos",
              link: ""
            },
          ]
        },
        {
          grupoMuscular: "Femoral - Gluteo",
          ejercicios: [
            {
              nombre: "Curl femoral en maquina (sentado)",
              series: [
                { descripcion: "Bloque 1", cantidad: "4 series", repeticiones: "8 - 12 reps" }
              ],
              detalle: [
                "Bloque 1: Carga exigente | aprieta 2s cuando llegues al final del movimiento",
              ],
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Bulgaras",
              series: [
                { descripcion: "Bloque 1", cantidad: "3 series", repeticiones: "8 reps + fallo" }
              ],
              detalle: [
                "Bloque 1: Carga exigente | coloca el pie trasero en un banco y baja controlando el movimiento",
              ],
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Pantorillas de pie o sentado",
              series: [
                { descripcion: "Bloque 1", cantidad: "4 series", repeticiones: "10 - 15 reps" }
              ],
              detalle: [
                "Bloque 1: Carga exigente | controla el movimiento, pero trata de llegar al fallo."
              ],
              descanso: "1 minuto y medio",
              link: ""
            },
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
              nombre: "Press de hombro con mancuernas",
              series: [
                { descripcion: "Bloque 1: Aproximacion", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: Efectivas", cantidad: "3 series", repeticiones: "6 - 8 reps" },
              ],
              detalle:
              [
                "Bloque 1: Carga neutra | subir y bajar en 2s",
                "Bloque 2: Carga exigente | bajar en 3s, mantienes 1s y subes en 1s",
              ],
              descanso: "1 minuto y medio ",
              link: ""
            },
            {
              nombre: "Vuelos laterales en maquina",
              series: [
                { descripcion: "Bloque 1: Aproximacion", cantidad: "1 serie", repeticiones: "20 - 25 reps" },
                { descripcion: "Bloque 2: Efectivas", cantidad: "3 series", repeticiones: "12 reps + fallo" }
              ],
              detalle: 
              [
                "Bloque 1: Carga neutra | subir en 2s, mantienes 2s y bajas en 2s",
                "Bloque 2: Carga exigente | bajas en 3s, mantienes 2s y subes en 1s ",
              ],
              descanso: "1 minutos",
              link: ""
            },
            {
              nombre: "Vuelos posteriores en maquina de peck fly",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "15 reps" }
              ],
              detalle: "Carga Exigente | acomodar los agarres para que trabajes la parte posterior del hombro, bajas lento y cuando subas mantienes 2s",
              descanso: "1 minuto",
              link: ""
            },
           
          ]
        },
        {
          grupoMuscular: "Bicep - Tricep Biseries",
          ejercicios: [
            {
              nombre: "Curl de biceps con barra Z",
              series: [
                { descripcion: "Bloque 1", cantidad: "4 series", repeticiones: "10 reps" }
              ],
              detalle: "Bloque 1: Carga exigente | subes en 2s, aprietas 2s y bajas en 3s ",
              descanso: "2 minutos",
              link: ""
            },
            {
              nombre: "Extension de triceps con agarre V",
              series: [
                { descripcion: "Bloque 1", cantidad: "4 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Bloque 1: Carga exigente | controla el movimiento, bajando en 3s y estirando en 1s",
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Curl de bicep en predicador con mancuerna en forma de martillo",
              series: [
                { descripcion: "Bloque 1", cantidad: "3 series", repeticiones: "10 reps" }
              ],
              detalle: "Bloque 1: Carga neutra | La mancuerna en forma de martillo, subes en 2s, aprietas 1s y bajas en 3s.",
              descanso: "1 minuto y medio",
              link: ""
            },
            {
              nombre: "Extension de triceps con cuerda, tras nuca",
              series: [
                { descripcion: "Bloque 1", cantidad: "3 series", repeticiones: "8 - 12 reps" }
              ],
              detalle: "Bloque 1: Carga exigente | bajas en 3s, mantienes 2s y estiras en 3s",
              descanso: "1 minuto y medio",
              link: "https://fitcron.com/exercise/extension-horizontal-en-martillo-en-polea-alta-triceps/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Jueves",
    titulo: "Pierna",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Femoral - Gluteo",
          ejercicios: [
            {
              nombre: "Sentadilla sumo en maquina de sentadilla perfecta (Mirando el respaldo)",
              series: [
                { descripcion: "Aproximacion", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" }

              ],
              detalle: "| Carga exigente | Control total del movimiento, bajando en 3s y subiendo en 1s",
              descanso: "2 minutos y medio de descanso",
              link: ""
            },
            {
              nombre: "abductores en maquina",
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "15 reps" }
              ],
              detalle: "Controlando el movimiento, aprieta 2s cuando abras las piernas",
              descanso: "1 minuto y medio ",
              link: ""
            },
            {
              nombre: "Maquina de femoral acostado",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "12 - 15 reps" }
              ],
              detalle: "Control total del movimiento, apretando 2s al final de cada repetición y bajando en 3s",
              descanso: "1 minuto y medio ",
              link: ""
            }
          ]
        },
        {
          grupoMuscular: "Cuadriceps",
          ejercicios: [
            {
              nombre: "Prensa de cuadriceps",
              series: [
                { descripcion: "Controladas", cantidad: "4 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 1s",
              descanso: "2 minutos",
              link: ""
            },
            {
              nombre: "Extensiones de cuadriceps en maquina",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "8 reps + dobles" }
              ],
              detalle: "Las 8 reps son individuales y las dobles hasta llegar al fallo",
              descanso: "2 minutos",
              link: ""
            },
            {
              nombre: "Pantorillas de pie o sentado",
              series: [
                { descripcion: "Controladas", cantidad: "3 series", repeticiones: "10 reps + fallo" }
              ],
              detalle: "Realiza el movimiento, pero trata de llegar al fallo.",
              descanso: "2 minutos",
              link: ""
            },
          ]
        },
        
      ]
    }
  },
  {
    dia: "Viernes",
    titulo: "Pecho - Espalda",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Press de pecho en banco plano con mancuernas",
              series: [
                { descripcion: "Aproximacion", cantidad: "2 series", repeticiones: "12 - 15 reps" },
                { descripcion: "Efectivas", cantidad: "3 series", repeticiones: "6 - 8 reps" }
              ],
              detalle: "Controla el movimiento (bajando lo mas controlado que puedas)",
              descanso: "1 minuto y medio de descanso",
              link: ""
            },
            {
              nombre: "Banco inclinado con barra",
              series: [
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Carga exigente | controla la bajada lo más lento posible.",
              descanso: "2 minutos de descanso",
              link: ""
            },
            {
              nombre: "Cruces en poleas",
              series: [
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "12 - 15 reps" }
              ],
              detalle: "Carga exigente | controla el movimiento y aprieta 2s cuando juntes las manos",
              descanso: "1 minuto",
              link: ""
            },
          ]
        },
        {
          grupoMuscular: "espalda",
          ejercicios: [
            {
              nombre: "Remo en polea sentado",
              series: [
                { descripcion: "efectivas", cantidad: "4 series", repeticiones: "10 reps " }
              ],
              detalle: "control total del movimiento, aprieta 2s cuando llegues a la cintura",
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Jalon al pecho en polea (agarre abierto)",
              series: [
                { descripcion: "efectivas", cantidad: "4 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Control total del movimiento, aprieta 2s cuando llegues al pecho",
              descanso: "1 minuto y medio de descanso",
              link: ""
            },
            {
              nombre: "puill over en polea alta con cuerda o barra",
              series: [
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Control total del movimiento, aprieta 3s cuando llegues a la cintura",
              descanso: "1 minuto y medio de descanso",
              link: ""
            },
            {
              nombre: "Remo T con agarre abierto",
              series: [
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Control total del movimiento, aprieta 2s cuando llegues arriba",
              descanso: "1 minuto y medio de descanso",
              link: ""
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Sábado",
    titulo: "Hombro - Brazo",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Vuelos laterales con mancuernas",
              series: [
                { descripcion: "aproximacion", cantidad: "2 series", repeticiones: "15 reps " },
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "12 reps + fallo" }
              ],
              detalle: "control total del movimiento, menteniendo 2s arriba y bajando en 3s",
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Press de hombro en maquina (agarre abierto)",
              series: [
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 1s",
              descanso: "1 minuto y medio de descanso",
              link: ""
            },
            {
              nombre: "Vuelos posteriores en maquina de peck fly",
              series: [
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "12 reps" }
              ],
              detalle: "Control total del movimiento, aprieta 2s cuando llegues atras",
              descanso: "1 minuto y medio de descanso",
              link: ""
            },
            {
              nombre: "Vuelos frontales con mancuernas",
              series: [
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "6 reps individuales + 6 reps con ambas" }
              ],
              detalle: "Control total del movimiento, aprieta 2s cuando llegues al frente",
              descanso: "1 minuto y medio de descanso",
              link: ""
            }
          ]
        },
        {
          grupoMuscular: "Bicep - Tricep Biseries",
          ejercicios: [
            {
              nombre: "Curl predicador con barra Z",
              series: [
                { descripcion: "efectivas", cantidad: "4 series", repeticiones: "10 reps" }
              ],
              detalle: "control total del movimiento, subes en 2s, aprietas 2s y bajas en 3s ",
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Extension de triceps en polea alta con cuerda",
              series: [
                { descripcion: "efectivas", cantidad: "4 series", repeticiones: "8 - 10 reps" }
              ],
              detalle: "control total del movimiento, bajando en 3s y estirando en 1s",
              descanso: "1 minuto",
              link: ""
            },
            {
              nombre: "Martillos con mancuernas (dobles)",
              series: [
                { descripcion: "efectivas", cantidad: "3 series", repeticiones: "10 reps" }
              ],
              detalle: "control total del movimiento, La mancuerna en forma de martillo, aprieta 3s cuando llegues arriba",
              descanso: "1 minuto y medio",
              link: ""
            },
            {
              nombre: "Rompecraneos con barra Z (preess frances)",
              series: [
                { descripcion: "efectivas", cantidad: "4 series", repeticiones: "8 - 12 reps" }
              ],
              detalle: "control total del movimiento, bajas en 3s, mantienes 2s y estiras en 3s",
              descanso: "1 minuto y medio",
              link: ""
            }
          ]
        }
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
