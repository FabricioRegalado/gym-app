// data/rutinasData.js

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
              nombre: "Banco inclinado con barra",
              series: ["1 serie", "3 series"],
              repeticiones: ["12-15", "4-6 reps + fallo"],
              detalle: ["Las reps de 4-6 son pesadas y el fallo es con menor peso, las reps que salgan"],
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-barra/"
            },
            {
              nombre: "Cruces en poleas",
              series: ["1 serie", "3 series"],
              repeticiones: ["12-15", "8-10 reps"],
              detalle: "Las serires de 8-10 reps debes de aguantar 10s apretando y despues iniciar a realizar las 8 - 10 reps",
              descanso: "2 minutos",
              link: "https://eresfitness.com/cruces-en-polea-alta-crossover/"
            },
            {
              nombre: "Press con macuernas en banco plano",
              series: ["1 serie", "3 series"],
              repeticiones: ["15 reps","1 + 1s abajo (hasta llegar a 5)"],
              detalle:
                "Los segunos se aguantan abajo sosteniendo para generar resistencia",
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-banca-con-mancuernas/"
            }
          ]
        },
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Elevaciones Laterales con Mancuernas",
              series: ["4 series"],
              repeticiones: ["15 reps con 20/25lbs", "+ 15 reps con 10/15lbs"],
              detalle: "Control total tanto al bajar y al subir",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },
            {
              nombre: "Maquina de hombro (agarre abierto)",
              series: ["4 series"],
              repeticiones: ["6-8 reps (exigentes) +", " 10 - 12 reps explocivas (2 - 3 placas menos)"],
              detalle: "",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-hombros-en-maquina/"
            },
            {
              nombre: "Vuelos posteriores en poleas",
              series: ["4 series"],
              repeticiones: ["12-15 reps"],
              detalle: "Lo mayor controlado posible",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/aperturas-posteriores-en-polea/"
            }
          ]
        },
        {
          grupoMuscular: "Tríceps",
          ejercicios: [
            {
              nombre: "Maneral: Cuerda tras nuca",
              series: ["2 series","2 series"],
              repeticiones: ["6-8 reps", "1 + 1s, 2 + 2s (hasta llegar a 5)"],
              detalle: "Las repeticiones de 6-8 son exigentes, las reps de 1 + 1s, 2 + 2s son con menos peso (Los segundos se aguantan con el brazo extendido)",
              descanso: "2 de descanso",
              link: "https://eresfitness.com/extension-en-polea-con-cuerda-sobre-la-cabeza/"
            },
            {
              nombre: "Maquina predicador de triceps",
              series: ["3 series"],
              repeticiones: ["Aguantamos 10s con los brazos extendidos y depues realizamos 10 reps"],
              detalle: "Individual por cada brazo",
              descanso: "2 minutos y medio de descanso",
              link: "https://fitcron.com/exercise/extensiones-en-pronacion-en-maquina-triceps/"
            },
            {
              nombre: "Maneral: V (Triangulito)",
              series: ["3 series"],
              repeticiones: ["6 reps a Fallo"],
              detalle: "Exigentes y controlando las subida y bajada (Exentrica y concentrica)",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/extension-vertical-en-pronacion-en-polea-alta-triceps/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Martes",
    titulo: "Espalda - Bíceps - Trapecios",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Jalón individual en polea alta (incado)",
              series: ["4 series"],
              repeticiones: ["8-10 reps"],
              detalle: "Control total del movimiento, apretando 2s al final de cada repetición (colocar el maneral que utilizamos para pecho)",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/jalon-al-pecho-a-una-mano-sentado-con-polea/"
            },
            {
              nombre: "Remo T (agarre abierto)",
              series: ["4 series"],
              repeticiones: ["8 - 10 reps"],
              detalle: "Control total del movimiento, apretando 2s al final de cada repetición y bajando en 3s",
              descanso: "2 minutos de descanso",
              link: "https://eresfitness.com/remo-en-barra-t/"
            },
            {
              nombre: "Pull over con barrita",
              series: ["3 series"],
              repeticiones: ["8 reps a fallo"],
              detalle: "Manteniendo 2 segundos siempre apretando",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/rope-pulldown"
            },
            {
              nombre: "Remo con el maneral amplio de agarre neutro",
              series: ["3 series","1 serie DropSet"],
              repeticiones: ["6 - 8 reps", "6 reps (bajamos una placa) + 6 reps (bajamos otra placa) + 8 reps a fallo"],
              detalle: "Control total del movimientom, apretando 2s al final de cada repetición y bajando en 3s",
              descanso: "2 minutos y medio de descanso",
              link: "https://templodelfitness.com/ejercicios/espalda/espalda-polea/como-hacer-remo-con-agarre-abierto-en-polea/"
            },
            {
              nombre: "Encogimientos en maquina smith (agarre abierto)",
              series: ["4 series"],
              repeticiones: ["12 - 15 reps"],
              detalle: "Control total del movimientom, apretando 2s al final de cada repetición y bajando en 4s",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/encogimiento-de-hombros-en-maquina-smith-agarre-abierto/"
            },
            
          ]
        },
        {
          grupoMuscular: "Bíceps",
          ejercicios: [
            {
              nombre: "Curl predicador con barra z",
              series: ["3 series"],
              repeticiones: ["8 - 10 reps"],
              detalle: "Control total del movimiento, apretando 2s al final de cada repetición y bajando en 3s",
              descanso: "1 minuto y medio de descanso",
              link: "https://fitcron.com/exercise/curl-en-supinacion-abierto-en-banco-scott-con-barra-z-biceps/"
            },
            {
              nombre: "Curl Bayesian",
              series: ["3 series"],
              repeticiones: ["8 - 10 reps por cada brazo"],
              detalle: "Control total del movimiento, apretando 2s al final de cada repetición y bajando en 3s",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.endomondo.com/exercise/bayesian-curl"
            },
            {
              nombre: "Curl de bíceps con barra z ",
              series: ["3 series"],
              repeticiones: ["12-15 reps + 10s al terminar las reps"],
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-con-barra-z/"
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
              nombre: "Globet Squat en Smith (arriba de dos discos de fomi)",
              series: ["1 serie", "3 series"],
              repeticiones: ["15 reps", "8 - 10 reps"],
              detalle: "Control total del movimiento, manteniendo 2s abajo y subiendo en 3s",
              descanso: "2 minutos y medio de descanso",
              link: "https://www.tiktok.com/@raeskevi/video/7474044553851391278?is_from_webapp=1&sender_device=pc&web_id=7468014344346781189"
            },
            {
              nombre: "Sissy Squat",
              series: ["4 series"],
              repeticiones: ["8-10 reps (con una mancuerna)","6 a fallo sin peso"],
              detalle: "Control total del movimiento, bajando en 3s",
              descanso: "2 minutos",
              link: "https://www.youtube.com/shorts/bSQk0EpgeZ4?feature=share"
            },
            {
              nombre: "Prensa",
              series: ["3 series"],
              repeticiones: ["10 - 15 reps"],
              detalle: "Bajando en 3s y subiendo en 3s",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-pierna/"
            },
            {
              nombre: "Extensione de cuádriceps",
              series: ["2 series", "1 serie DropSet"],
              repeticiones: ["15 reps","6 reps (bajamos una placa) + 6 reps (bajamos otra placa) + 8 reps a fallo"],
              detalle: "Control total del movimiento, manteniendo 2s arriba y bajando lentamente",
              descanso: "2 minutos",
              link: "https://eresfitness.com/extension-de-piernas-en-maquina/"
            },
            {
              nombre: "Curl de femoral acostado",
              series: ["4 series"],
              repeticiones: ["6 reps a fallo"],
              detalle: "Control total del movimiento y bajando lo mas lentamente posible",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-femoral-acostado-en-maquina/"
            },
            {
              nombre: "Peso muerto rumano con barra",
              series: ["3 series"],
              repeticiones: ["12 reps"],
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/peso-muerto-rumano/"
            },
            {
              nombre: "Abductores",
              series: ["4 series"],
              repeticiones: ["Aguantamos 10s + 6 reps a fallo"],
              detalle: "Exigentes (los segundos se aguantan con las piernas cerradas)",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/aductores-en-maquina/"
            },
            
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
              nombre: "Press de pecho en maquina ",
              series: ["1 serie", "3 series"],
              repeticiones: ["15 reps", "6-8 reps + (bajamos peso y realizamos 8-10 reps)"],
              detalle: "Controlando el movimiento, apretando 2s al final de cada repetición",
              descanso: "2 minutos y medio de descanso",
              link: "https://eresfitness.com/press-de-pecho-en-maquina/"
            },
            {
              nombre: "Banco inclinado con mancuernas",
              series: ["1 serie", "3 series"],
              repeticiones: ["6 reps", "12-15 reps"],
              detalle: "Controlando el movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-mancuernas/"
            },
            {
              nombre: "Peck deck",
              series: ["3 series"],
              repeticiones: ["8-10 reps"],
              detalle: "Apretando 2s en cada repetición",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/aperturas-peck-deck-de-pecho/"
            }
          ]
        },
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Laterales individuales (recargado en un pilar)",
              series: ["3 series"],
              repeticiones: ["Agutamos 10s + 10 reps por lado"],
              detalle: "Control total del movimiento, los segundos se aguantan con el brazo extendido",
              descanso: "1 minuto y medio de descanso",
              Link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },
            {
              nombre: "Press Militar con mancuernas ",
              series: ["3 series"],
              repeticiones: ["8 reps + fallo explosivas"],
              detalle: "Control total del movimiento, las explosivas son subiendo y bajando en 1s",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-militar-con-mancuernas-o-barra/"
            },
            {
              nombre: "Maquina de laterales",
              series: ["3 series"],
              repeticiones: ["15 reps"],
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
              series: ["4 series"],
              repeticiones: ["8 reps"],
              detalle: "Exigentes",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extension-de-triceps-concentrado-en-maquina/"
            },
            {
              nombre: "Maneral: Barrita ",
              series: ["4 series"],
              repeticiones: ["12 reps"],
              detalle: "Control total del movimiento, apretando 2s al final de cada repetición y bajando en 3s",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extension-de-triceps-en-polea-agarre-supino/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Viernes",
    titulo: "Espalda - Biceps - Trapecios",
    duracion: "50 min",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Jalón al pecho (agarre neutro)",
              series: ["1 serie", "3 series"],
              repeticiones: ["15", "8-12 reps"],
              detalle: "Subiendo en 3s",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/close-grip-pulldown"
            },
            {
              nombre: "Pull over con cuerda",
              series: ["4 series"],
              repeticiones: ["8-10 reps"],
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/rope-pulldown"
            },
            {
              nombre: "Maquina T (agarre cerrado)",
              series: ["3 series"],
              repeticiones: ["10s apretando + 10 reps"],
              detalle: "El apretar es arriba y se continua con las reps",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.tiktok.com/@lombardofit/video/7332286210905361669?is_from_webapp=1&sender_device=pc"
            },
            {
              nombre: "Jalon a la barbilla",
              series: ["3 series"],
              repeticiones: ["10s apretando + 10 reps"],
              detalle: "El apretar es arriba y se continua con las reps",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.vitonica.com/musculacion/guia-para-principiantes-xix-remo-al-cuello"
            }
          ]
        },
        {
          grupoMuscular: "Bíceps",
          ejercicios: [
            {
              nombre: "Curl Predicador con mancuerna (en forma de martillos)",
              series: ["3 series"],
              repeticiones: ["10 reps por c/u"],
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-predicador-a-una-mano-con-mancuerna/"
            },
            {
              nombre: "Curl con barrita en polea baja",
              series: ["4 series"],
              repeticiones: ["8 reps"],
              detalle: "Control total del movimiento",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-en-polea-baja-con-barra-recta/"
            },
            {
              nombre: "Curl bíceps en banco inclinado con mancuernas",
              series: ["4 series"],
              repeticiones: ["8 reps controladas", "8 reps parciales"],
              detalle: "Control total del movimiento y respetando la rotacion",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-biceps-inclinado-con-mancuerna/"
            }
          ]
        }
      ]
    }
  }
];

export default rutinasData;
