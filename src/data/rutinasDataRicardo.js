
const rutinasData = [
  {
    dia: "Lunes",
    titulo: "Femoral - Hombros",
    
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Femoral",
          ejercicios: [
            {
              nombre: "Curl femoral sentado en maquina",
              series: ["1 serie", "3 series"],
              repeticiones: ["12-15 reps", "4-6 reps + fallo"],
              detalle: ["Las reps de 4-6 son pesadas y el fallo es con menor peso (una o dos placas menos), las reps que salgan, bajar y subir en 3s"],
              descanso: "2 minutos y medio",
              link: "https://eresfitness.com/curl-femoral-sentado-en-maquina/"
            },
            {
              nombre: "Sentadilla sumo con mancuerna",
              series: ["3 series"],
              repeticiones: ["10s isometricos + 8-10 reps"],
              detalle: "Los segundos isometricos se realizan a medio recorrido (como si te fueras a sentar en el aire) despues de los segundos se realizan las 8-10 reps subiendo y bajando lento y controlado",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/sentadilla-abierta-con-mancuerna-pierna/"
            },
            {
              nombre: "Peso Muerto con Mancuernas",
              series: ["4 series"],
              repeticiones: ["12 - 15 reps"],
              detalle: "Las repeticones son controladas, bajando en 3s y subiendo en 3s",
              descanso: "2 minutos y medio",
              link: "https://fitcron.com/exercise/peso-muerto-con-mancuernas-pierna/"
            },
            {
              nombre: "Abductores",
              series: ["3 series"],
              repeticiones: ["8s isometricos + 8 reps "],
              detalle: "Los segundos isometricos se realizan con las piernas abiertas y despues de los segundos se realizan las 8 reps, controlando totalmente la apertura y el cierre (concetrica y exentrica)",
              descanso: "2 minutos y medio",
              link: "https://fitcron.com/exercise/aductor-externo-en-maquina-pierna/"
            }
          ]
        },
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: "Elevaciones Laterales con Mancuernas",
              series: ["4 series"],
              repeticiones: ["15 reps con 2s + 15 reps subiendo y bajando en 1s"],
              detalle: "Los segundos de las primeras 15 reps son con el brazo extendido y despues de los segundos se realizan las 15 reps subiendo y bajando en 1s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
            },
            {
              nombre: "Maquina de hombro (agarre abierto)",
              series: ["4 series"],
              repeticiones: ["6-8 reps (exigentes) +", " 10 - 12 reps explosivas (2 - 3 placas menos)"],
              detalle: "Las reps exigenetes son controladas, bajando en 3s y subiendo en 3s, las reps explosivas son subiendo y bajando en 1s",
              descanso: "2 minutos y medio de descanso",
              link: "https://eresfitness.com/press-de-hombros-en-maquina/"
            },
            {
              nombre: "Vuelos posteriores en poleas",
              series: ["4 series"],
              repeticiones: ["12-15 reps"],
              detalle: "El mayor control posible, apretando 2s al final de cada repetición",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/aperturas-posteriores-en-polea/"
            }
          ]
        },
        
      ]
    }
  },
  {
    dia: "Martes",
    titulo: "Pecho - Triceps ",
    
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Peck Deck",
              series: ["1 serie","3 series"],
              repeticiones: ["15 reps "," 8 - 10 reps"],
              detalle: "La serie de 15 reps es de aproximacion (peso inicial), las reps de 8-10 son pesadas ya que seran las efectivas, no olvides controlar el cierre y la apertura",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/aperturas-en-maquina-pectoral/"
            },
            {
              nombre: "Press de banca inclinado con barra",
              series: ["3 series"],
              repeticiones: ["8 - 10 reps"],
              detalle: "Control total del movimiento, subiendo en 3s y bajando en 3s",
              descanso: "2 minutos de descanso",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-barra/"
            },
            {
              nombre: "Press de banca con mancuernas",
              series: ["2 series","1 serie DropSet"],
              repeticiones: ["8 - 12 reps"," 6 reps (cambiamos a un peso menor de mancuernas) + 6 reps (bajamos otro peso de mancuernas) + 8 reps a fallo"],
              detalle: "Las 2 series de 8 - 12 reps son controladas y la serie DropSet al finalizar cada 6 reps ve por un peso menor de mancuernas",
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-banca-con-mancuernas/"
            },
            
          ]
        },
        {
          grupoMuscular: "Triceps",
          ejercicios: [
            {
              nombre: "Maneral: Triangulo o agarre en v",
              series: ["1 serie","3 series"],
              repeticiones: ["12 - 15  reps "," 8 - 10 reps"],
              detalle: "La seroe de 12 - 15 reps es de aproximacion (peso inicial), las reps de 8 - 10 son pesadas ya que seran las efectivas, no olvides controlar la subida y bajada (exentrica y concentrica)",
              descanso: "2 minutos y medio de descanso",
              link: "https://fitcron.com/exercise/extension-vertical-en-pronacion-en-polea-alta-triceps/"
            },
            {
              nombre: "Press Frances (Rompe Craneos) en banco inclinado, con mancuernas",
              series: ["3 series"],
              repeticiones: ["15 reps"],
              detalle: "Control total del movimiento, trata de llegar por debajo de la cabeza",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/extensiones-inclinadas-con-mancuernas-triceps/"
            },
            {
              nombre: "Maneral: Cuerda en polea alta ",
              series: ["2 series","2 series Rest Pause"],
              repeticiones: ["8 - 10 reps"," 8 reps + 10s de descanso + 8 reps + 10s de descanso + 8 reps"],
              detalle: "Control total del movimiento, subiendo y bajando en 2s (realiza una pausa de 3s tanto al llegar arriba como cuando estes abajo)",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/extension-vertical-neutro-en-polea-alta-triceps/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Miércoles",
    titulo: "Cuadriceps - Hombro",
    
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Cuadriceps",
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
              repeticiones: ["8-10 reps (con una mancuerna) + "," 6 a fallo sin peso"],
              detalle: "Control total del movimiento, bajando en 3s",
              descanso: "2 minutos",
              link: "https://www.youtube.com/shorts/bSQk0EpgeZ4?feature=share"
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
              nombre: "Pantorrilla en maquina",
              series: ["3 series"],
              repeticiones: ["18 reps"],
              detalle: "Control total del movimiento, manteniendo 2s arriba y bajando lentamente",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/extension-de-gemelos-en-maquina-con-carga-superior-pierna/"
            },
            {
              nombre: "Abductores",
              series: ["3 series"],
              repeticiones: ["15 reps"],
              detalle: "Control total del movimiento, manteniendo 2s apretando y bajando lentamente",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/aductor-interno-en-maquina-pierna/"
            },
            
        
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
                Link: "https://youtu.be/256T3BjiUnU"
              },
              {
                nombre: "Press Militar con mancuernas ",
                series: ["3 series"],
                repeticiones: ["8 reps + fallo explosivas"],
                detalle: "Control total del movimiento, las explosivas son subiendo y bajando en 1s",
                descanso: "2 minutos",
                link: "https://eresfitness.com/press-militar-con-mancuernas-o-barra/"
              },
              {
                nombre: "Jalon a la barbilla",
                series: ["4 series"],
                repeticiones: ["15 reps"],
                detalle: "Controlando movimiento, apretando 2s en la parte alta",
                descanso: "1 minuto y medio de descanso",
                link: "https://fitcron.com/exercise/remo-al-menton-cerrado-con-barra-z-deltoides/"
              }
            ]
        }
      ]
    }
  },
  {
    dia: "Jueves",
    titulo: "Espalda - Biceps",
    
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Jalón al pecho (agarre neutro)",
              series: ["1 serie", "3 series"],
              repeticiones: ["15 reps", "8-12 reps"],
              detalle: "Subiendo y bajando en 3s",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/close-grip-pulldown"
            },
            {
              nombre: "Pull over con cuerda",
              series: ["4 series"],
              repeticiones: ["8-10 reps"],
              detalle: "Control total del movimiento, trata que el regreso sea lo mayor controlado posible",
              descanso: "1 minuto y medio de descanso",
              link: "https://www.simplyfitness.com/es/pages/rope-pulldown"
            },
            {
              nombre: "Remo T (agarre abierto)",
              series: ["3 series"],
              repeticiones: ["10s apretando + 10 reps"],
              detalle: "El apretar es arriba y se continua con las reps",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/remo-en-barra-t-en-pronacion-dorsal/"
            },
            {
              nombre: "Jalón al pecho (agarre abierto)",
              series: ["4 series"],
              repeticiones: ["15 reps"],
              detalle: "Subiendo y bajando en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/jalon-al-pecho-agarre-abierto/"
            },
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
              nombre: "Curl con barra z en polea baja",
              series: ["4 series"],
              repeticiones: ["8 reps"],
              detalle: "Control total del movimiento, sostener 2s arriba y bajar lentamente",
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
  },
  {
    dia: "Viernes",
    titulo: "Femoral - Pecho",
    
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Femoral",
          ejercicios: [
            {
              nombre: "Peso muerto rumano con barra",
              series: ["4 series"],
              repeticiones: ["8 - 12 reps controladas"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/peso-muerto-rumano/"
            },
            {
              nombre: "Sentadilla sumo con barra (landmine)",
              series: ["3 series exigentes"],
              repeticiones: ["8 - 12 reps"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s OJO: manten 2s al final de cada rep",
              descanso: "2 minutos",
              link: "https://eresfitness.com/sentadilla-sumo-con-barra-landmine/"
            },
            {
              nombre: "Curl femoral acostado en máquina",
              series: ["3 series exigentes"],
              repeticiones: ["6 reps a fallo exigentes"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s OJO: Que no se levante la cadera",
              descanso: "2 minutos",
              link: "https://eresfitness.com/curl-femoral-acostado-en-maquina/"
            },
            {
              nombre: "Bulgaras con mancuernas",
              series: ["3 series"],
              repeticiones: ["8 - 10 reps por pierna"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s OJO: La rodilla debe de estar recta para activar gluteos",
              descanso: "2 minutos",
              link: "https://emetraininguy.com/blog/f/modificar-sentadillas-b%C3%BAlgaras"
            }
          ]
        },
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Press de pecho en maquina o en banco plano con barra",
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
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-mancuernas/"
            },
            {
              nombre: "Cruces en polea baja",
              series: ["3 series"],
              repeticiones: ["8-10 reps"],
              detalle: "Apretando 2s en cada repetición y bajando lentamente",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/cruces-en-polea-baja/"
            }
          ]
        },
      ]
    }
  }
];

export default rutinasData;
