// Rutinas personalizadas para Eustolio (Efrain)
const rutinasData = [
  {
    dia: "Lunes",
    titulo: "Pecho - Biceps",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Banco plano con mancuernas",
              series: [
                { descripcion: "Bloque 1: aproximacion", cantidad: "2 series", repeticiones: "12 - 15 reps" },
                { descripcion: "Bloque 2: efectivas", cantidad: "2 series", repeticiones: "8 - 12 reps" },

              ],
              detalle: [
                "Controla el movimiento y evita rebotes.",
                "Lleva control de los pesos",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/press-de-banca-con-barra/"
            },
            {
              nombre: "Peck fly (aperturas en maquina)",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "12 - 15 reps" },

              ],
              detalle: [
                "Controla el movimiento y evita rebotes.",
                "Aprieta 3s al final de cada repetición.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/aperturas-en-contractor-de-pecho/"
            }
          ]
        },
        {
          grupoMuscular: "Biceps",
          ejercicios: [
            {
              nombre: "Curl de bíceps con mancuernas",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "15 reps" },

              ],
              detalle: [
                "Controla el movimiento.",
                "Sosten 3s arriba y aprieta el bíceps.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/curl-agarre-prono-con-mancuernas/"
            },
            {
              nombre: "Curl concentrado en maquina",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },

              ],
              detalle: [
                "Controla el movimiento y evita rebotes.",
                "Baja lentamente.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/curl-concentrado-en-maquina/"
            },
            {
              nombre: "Curl de bicep en banco inclinado con mancuernas",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "12 reps" },

              ],
              detalle: [
                "Controla el movimiento y evita rebotes.",
                "Baja lentamente y que sean cargas exigentes.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/curl-biceps-inclinado-con-mancuerna/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Martes",
    titulo: "Pierna - hombro",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pierna",
          ejercicios: [
            {
              nombre: "Maquina de extensiones de cuádriceps",
              series: [
                { descripcion: "Bloque 1: aproximacion", cantidad: "2 series", repeticiones: "20 reps" },
                { descripcion: "Bloque 2: efectivas", cantidad: "2 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Controla el movimiento .",
                "Baja lentamente y en las rondas efectivas aumenta el peso.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/extension-de-piernas-en-maquina/"
            },
            {
              nombre: "Prensa de piernas",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "8 reps - fallo" },
              ],
              detalle: [
                "Controla el movimiento .",
                "Carga exigente baja aprox en 3s.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/press-de-pierna/"
            },
            {
              nombre: "Aductores en maquina",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "15 reps" },
              ],
              detalle: [
                "Controla el movimiento.",
                "El movimiento tiene que ser lento y controlado.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/aductores-en-maquina/"
            },

          ]
        },
        {
          grupoMuscular: "hombro",
          ejercicios: [
            {
              nombre: "Maquina de laterales",
              series: [
                { descripcion: "Bloque 1: aproximacion", cantidad: "2 series", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Controla el movimiento .",
                "Bloque 1: pesos neutros, bloque 2: cargas exigentes."
                
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/elevaciones-laterales-en-maquina/"
            },
            {
              nombre: "Press para hombro en maquina - agarre abierto",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "8 reps - fallo" },
              ],
              detalle: [
                "Controla el movimiento .",
                "Carga exigente baja en 3s.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/press-de-hombros-en-maquina/"
            },
            {
              nombre: "Remo al pecho en polea",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "20 reps" },
              ],
              detalle: [
                "Controla el movimiento.",
                "El movimiento es controlado",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/remo-al-cuello-con-polea-baja/"
            },

          ]
        },
        
      ]
    }
  },
  {
    dia: "Miércoles",
    titulo: "Espalda - Triceps",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Remo con agarre cerrado en polea baja",
              series: [
                { descripcion: "Bloque 1: aproximacion", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Controla el movimiento."
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/remo-sentado-en-polea-con-agarre-en-cuerda/"
            },
            {
              nombre: "Jalon al pecho con agarre amplio",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "4 serie", repeticiones: "15 reps" },
              ],
              detalle: [
                "Controla el movimiento."
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/jalon-al-pecho-agarre-abierto/"
            },
            {
              nombre: "Pull over en polea alta con cuerda",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "4 serie", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Controla el movimiento."
              ],
              descanso: "N/A",
              link: "https://www.tiktok.com/@cosmicoach/video/7238752180440665349?lang=es"
            }
          ],
          grupoMuscular: "Triceps",
          ejercicios: [
            {
              nombre: "Jalon en polea con cuerda",
              series: [
                
                { descripcion: "Bloque 2: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Controla el movimiento."
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/extension-de-triceps-a-una-mano-en-polea-agarre-cuerda/"
            },
            {
              nombre: "Jalon tras nuca en polea baja",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "15 - 18 reps" },
              ],
              detalle: [
                "Controla el movimiento."
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/extension-de-triceps-sobre-la-cabeza-con-polea/"
            },
            {
              nombre: "La flexion diamante de rodillas",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 serie", repeticiones: "Al fallo" },
              ],
              detalle: [
                "Controla el movimiento."
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/flexiones-diamante-de-rodillas/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Jueves",
    titulo: "Pecho - Biceps",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Banco inclinado con mancuernas",
              series: [
                { descripcion: "Bloque 1: aproximación", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "bloque 1: pesos neutros, bloque 2: cargas exigentes.",
                "Controla el movimiento y evita rebotes.",
                "Lleva control de los pesos",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-mancuernas/"
            },
            {
              nombre: "Banco plano con barra",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "bloque 1: pesos exigentes.",
                "Controla el movimiento y evita rebotes.",
                "Lleva control de los pesos",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/press-de-banca-con-barra/"
            },

            {
              nombre: "Peck deck (aperturas en maquina)",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "10 - fallo " },
              ],
              detalle: [
                "Controla el movimiento.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/aperturas-peck-deck-de-pecho/"
            },
            
          ],
          
        },
        {
          grupoMuscular: "Biceps ",
          ejercicios: [
            {
              nombre: "Curl de biceps indivual en banco predicador con mancuerna",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Controla el movimiento.",
                "Sosten 3s arriba y aprieta el bíceps.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/curl-predicador-a-una-mano-con-mancuerna/"
            }
          ],
           ejercicios: [
            {
              nombre: "Curl de biceps martillo dobles",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "12 - 15 reps" },
              ],
              detalle: [
                "bloque 1: pesos exigentes.",
                "El ejemplo del link dice que es uno y uno, pero no es así, son los dos a la vez.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/curl-martillo-con-mancuernas/"
            }
          ],
          
        }
      ]
    }
  },
  {
    dia: "Viernes",
    titulo: "Pierna - Hombro",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pierna",
          ejercicios: [
            {
              nombre: "Sentadilla sumo con mancuerna",
              series: [
                { descripcion: "Bloque 1: aproximacion", cantidad: "2 series", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Cuieda la postura y baja en 3s.",
                "El link viene sin peso, tu debes de hacerlo con mancuernas.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/sentadilla-sumo-sin-equipo/"
            },
            {
              nombre: "Maquina de femoral sentado",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Controla el movimiento.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/curl-femoral-sentado-en-maquina/"
            },
            {
              nombre: "Maquina de pantorillas de pie",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "4 series", repeticiones: "12 - 15 reps" },
              ],
              detalle: [
                "Controla el movimiento.",
              ],
              descanso: "N/A",
              link: ""
            },

          ]
        },
                {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Vuelos frontales con mancuernas",
              series: [
                { descripcion: "Bloque 1: aproximacion", cantidad: "2 series", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "controla el movimiento .",
              
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/elevacion-frontal-con-mancuernas/"
            },
            {
              nombre: "Vuelos posteriores con mancuernas",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "3 series", repeticiones: "15 reps" },
              ],
              detalle: [
                "Controla el movimiento.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/elevaciones-posteriores-con-mancuernas/"
            },
            {
              nombre: "Vuelos laterales con mancuernas",
              series: [
                { descripcion: "Bloque 1: efectivas", cantidad: "4 series", repeticiones: "15 - 20 reps" },
              ],
              detalle: [
                "Controla el movimiento.",
              ],
              descanso: "N/A",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },

          ]
        }
      ]
    }
  },
  {
    dia: "Sábado",
    titulo: "Descanso",
    duracion: "",
    tipo: "simple",
    contenido: {
      texto: "Día de descanso y recuperación"
    }
  },
  {
    dia: "Domingo",
    titulo: "Descanso",
    duracion: "",
    tipo: "simple",
    contenido: {
      texto: "Día de descanso y recuperación"
    }
  }
];

export default rutinasData;
