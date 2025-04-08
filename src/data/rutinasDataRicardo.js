const rutinasData = [
  {
    dia: "Lunes",
    titulo: "Pecho - Triceps",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Press banco inclinado con mancuernas",
              series: [
                { descripcion: "Bloque 1: Aproximacion", cantidad: "1 serie", repeticiones: "12 - 15 reps" },
                { descripcion: "Bloque 2: Efectivas", cantidad: "3 series", repeticiones: "6 - 10 reps" },
              ],
              detalle: [
                "Bloque 1: Peso -> mancuernas 25 - 30lbs | Carga neutra, para articular completamente | NOTA: Bajar y subir en 2s.",
                "Bloque 2: Peso -> 35 - 45lbs | Carga exigente y controladas |NOTA: bajas en 3s, mantienes 1s abajo, subes en 2s y mantienes 1s arriba.",                
              ],
              descanso: "2 minutos y medio",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-mancuernas/"
            },
            {
              nombre: "Press plano en maquina",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "8 - 12 reps" },
                { descripcion: "Bloque 2: RestPause", cantidad: "1 serie", repeticiones: "6 - 8 reps" },
              ],
              detalle: [
                "Bloque 1: Peso -> 6 - 9 placas | Carga exigente | NOTA: subiendo en 1s bajando en 3s.",
                "Bloque 2: Peso -> 6 - 8 placas | Carga neutra | NOTA: Realizas las reps, descansas 15s, vuelves a realizar las reps, vuelves a descansar 15 y realizas de nuevo las reps.",
                
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-pecho-en-maquina/"
            },
            {
              nombre: "Cruces en poleas",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "10 reps + 10 explosivas" },
              ],
              detalle: [
                "Bloque 1: Peso -> 2 - 4 placas | Carga neutra | NOTA: las primeras reps son controladas abres en 3s y cierras en 2s, despues las explosivas son abriendo y cerrando en 1s.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/cruces-en-polea-alta-crossover/"
            },
            {
              nombre: "Press inclinado neutro con mancuernas",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "10 reps + fallo" },
              ],
              detalle: [
                "Bloque 1: Peso -> 25 - 35lbs | Carga neutra | NOTA: bajas en 3s y antes de tocar tu pecho mantienes 2s y subes en 1s, el fallo se raliza subiendo y bajando en 1s.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/squeeze-press-inclinado-con-mancuernas/"
            },
          ]
        },
        {
          grupoMuscular: "Triceps",
          ejercicios: [
            {
              nombre: "Press frances (rompe craneos) con barra z en banco inclinado",
              series: [
                { descripcion: "Bloque 1: Efectiva", cantidad: "3 series", repeticiones: "12 - 15 reps" }
              ],
              detalle: [
                "Bloque 1: Peso -> discos 10 - 20lbs por lado | Carga exigente | NOTA: bajas en 3s y subes en 1s."
              ],
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/press-frances-con-barra-triceps/"
            },
            {
              nombre: "Extension de triceps con agarre V en polea alta",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "2 series", repeticiones: "6 - 12 reps" },
                { descripcion: "Bloque 2: RestPause", cantidad: "1 serie", repeticiones: "6 - 8 reps" },
              ],
              detalle: [
                "Bloque 1: Peso -> 8 - 10 placas | Carga exigente | NOTA: bajas en 3s, mantienes 1s y subes en 2s.",
                "Bloque 2: Peso -> 7 - 8 placas | Carga neutra | NOTA: realizas las reps, descansas 15s, vuelves a realizar las reps, vuelves a descansar 15 y realizas de nuevo las reps.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/extensiones-de-triceps-con-agarre-en-v-en-polea/"
            },
            {
              nombre: "Extension de triceps en maquina",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "4 series", repeticiones: "12 - 15 reps" }
              ],
              detalle: [
                "Bloque 1: Peso -> 3 - 5 placas | Carga exigente | NOTA: bajas en 3s, sostienes 1s y extiendes en 3s.",
              ],
              descanso: "2 minutos y medio de descanso",
              link: "https://eresfitness.com/extension-de-triceps-concentrado-en-maquina/"
            },
          ]
        }
      ]
    }
  },
  {
    dia: "Martes",
    titulo: "Cuadriceps - Hombro",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Cuadriceps",
          ejercicios: [
            {
              nombre: "Sentadilla smith",
              series: [
                { descripcion: "Bloque 1: Aproximacion", cantidad: "1 serie", repeticiones: "15 reps" },
                { descripcion: "Bloque 2: Aproximacion", cantidad: "1 serie", repeticiones: "12 reps" },
                { descripcion: "Bloque 3: Efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },

              ],
              detalle: [
                "Bloque 1: Peso -> disco de 30lbs por lado | Carga baja, para articular completamente | NOTA: Bajar y subir en 3s.",
                "Bloque 2: Peso -> disco de 40lbs por lado | Carga neutra, seguimos aproximando | NOTA: bajar y subir en 3s.",    
                "Bloque 3: Peso -> disco de 45 - 50lbs por lado | Carga exigente | NOTA: bajas en 3s, mantienes 1s y subes en 1s.",            
              ],
              descanso: "2 minutos",
              link: "https://www.lyfta.app/es/exercise/sentadilla-con-barra-baja-smith-f9"
            },
            {
              nombre: "Deplantes con mancuernas caminando",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "24 pasos" },
              ],
              detalle: [
                "Bloque 1: Peso -> mancuernas de 30 - 35lbs | Carga neutra | NOTA: al dar el paso, bajas en 3s y subes en 1s.",
                
              ],
              descanso: "1 minuto y medio",
              link: "https://eresfitness.com/zancadas-caminando-sin-equipo/"
            },
            {
              nombre: "Extension de cuadriceps",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Bloque 1: Peso -> 6 - 8 placas | Carga exigente | NOTA: subes en 1s, mantienes 2s con las piernas extendidas, bajas en 3s.",
              ],
              descanso: "1 minuto y medio",
              link: "https://eresfitness.com/extension-de-piernas-en-maquina/"
            },
            {
              nombre: "Aductor en maquina",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "10s + 10 - 15 reps" },
              ],
              detalle: [
                "Bloque 1: Peso -> 6 - 8 placas | Carga neutra | NOTA: mantienes los 10s con las piernas cerradas, despues realizas las reps.",
              ],
              descanso: "1 minuto y medio",
              link: "https://eresfitness.com/aductores-en-maquina/"
            },
          ]
        },
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Press militar con mancuernas",
              series: [
                { descripcion: "Bloque 1: Aproximacion", cantidad: "1 serie", repeticiones: "12 - 15 reps" },
                { descripcion: "Bloque 2: Efectivas", cantidad: "3 series", repeticiones: "8 - 10 reps" },
              ],
              detalle: [
                "Bloque 1: Peso -> mancuernas de 25 - 30lbs | Carga neutra, para articular completamente | NOTA: Bajar y subir en 2s.",
                "Bloque 2: Peso -> mancuernas de 35 - 45lbs | Carga exigente y controladas |NOTA: bajas en 3s, mantienes 1s abajo, subes en 3s.",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-militar-con-mancuernas-o-barra/"
            },
            {
              nombre: "Vuelos laterales con mancuernas",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "12 - 15 reps" },
                { descripcion: "Bloque 2: Hibrido", cantidad: "1 serie", repeticiones: " 12 - 15 reps + fallo" },
              ],
              detalle: [
                "Bloque 1: Peso -> mancueras de 15 - 20lbs | Carga exigente | NOTA: subes en 1s, mantienes 2s y bajas en 3s.",
                "Bloque 2: Peso -> mancuernas de 15 - 20lbs + mancuernas de 10 - 12 lbs | Carga exigente + baja | NOTA: realizas las reps efectivas 12 - 15 reps en el tempo que lo realizamos en el bloque anterior, despues cambias de mancuernas y realizas explosivas (subiendo y bajando en 1s).",
              ],
              descanso: "2 minutos",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },
            {
              nombre: "Vuelos posteriores en poleas",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "3 series", repeticiones: "15 reps" }
              ],
              detalle: [
                "Bloque 1: Peso -> 1 placa por lado | Carga efectiva | NOTA: extiendes en 3s, mantienes 2s y regresas en 3s.",
              ],
              descanso: "1 minuto y medio",
              link: "https://eresfitness.com/aperturas-posteriores-en-polea/"
            },
            {
              nombre: "Elevacion frontal individual con polea baja",
              series: [
                { descripcion: "Bloque 1: Efectivas", cantidad: "2 series", repeticiones: "20 reps" }
              ],
              detalle: [
                "Bloque 1: Peso -> 2 - 4 placas | Carga efectiva | NOTA: inclina un poco tu torso, subes en 2s, mantienes 1s y bajas en 3s.",
              ],
              descanso: "1 minuto y medio",
              link: "https://eresfitness.com/elevaciones-frontales-con-polea-baja-alternadas/"
            },
          ]
        }
      ]
    }
  },
  {
    dia: "Mircoles",
    titulo: "Espalda - bíceps ",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        
      ]
    }
  },
  {
    dia: "Jueves",
    titulo: "Femoral - Hombro",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        
      ]
    }
  },
  {
    dia: "Viernes",
    titulo: "Pecho - Triceps",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        
      ]
    }
  },
  {
    dia: "Viernes",
    titulo: "Espalda - Biceps ",
    duracion: "",
    tipo: "detallada",
    contenido: {
      secciones: [
        
      ]
    }
  }
];

export default rutinasData;
