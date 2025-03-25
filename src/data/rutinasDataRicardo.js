
const rutinasData = [
  {
    dia: "Lunes",
    titulo: "Pecho - Triceps",
    
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Press de pecho en máquina",
              series: ["1 serie", "3 series"],
              repeticiones: ["12-15 reps (peso incial)", "8 - 10 reps (carga pesada)"],
              detalle: ["Primer serie de aproximacion (peso neutro), 3 series restantes (bajando y subiendo en 3s, fase exentrica y concentrica)"],
              descanso: "2 minutos y medio",
              link: "https://eresfitness.com/press-de-pecho-declinado-en-maquina/"
            },
            {
              nombre: "Cruces en polea baja",
              series: ["4 series"],
              repeticiones: ["10s isometricos + 8-10 reps"],
              detalle: "Los segundos isometricos se realizan con los brazos extendidos, despues de los segundos se realizan las 8-10 reps, controlando totalmente la apertura y el cierre (concetrica y exentrica)",
              descanso: "2 minutos",
              link: "https://eresfitness.com/cruces-en-polea-baja/"
            },
            {
              nombre: "Press banca inclinado con barra",
              series: ["2 series","2 serires"],
              repeticiones: ["6 - 8 reps (exigente) "," 15 reps (subiendo y bajando en 1s) + 6 - 8 reps (subiendo y bajando en 3s) (carga neutra)"],
              detalle: "Las primeras 2 series son con peso exigente (3s para subir y bajar), las segundas son con menor peso para (subiendo y bajando en 1s y despues controlar el resto en 3s)",
              descanso: "2 minutos y medio",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-barra/"
            },
          ]
        },
        {
          grupoMuscular: "Triceps",
          ejercicios: [
            {
              nombre: "Press Francés con Inclinado con Barra z (Rompe craneos)",
              series: ["4 series"],
              repeticiones: ["15 reps"],
              detalle: "Las reps son controladas, bajando en 2s y subiendo en 2s",
              descanso: "2 minutos",
              link: "https://fitcron.com/exercise/extension-inclinada-con-barra-z-triceps/"
            },
            {
              nombre: "Extensión de triceps en polea alta (maneral: V)",
              series: ["2 series","1 serie (DropSet)"],
              repeticiones: ["6-8 reps (exigentes) +", " 6 reps (bajamos una placa) + 6 reps (bajamos otra placa) + 8 reps a fallo"],
              detalle: "Las reps exigenetes son controladas, bajando en 3s y subiendo en 3s, La serie DropSet es bajando en 1s y subiendo en 1s",
              descanso: "2 minutos y medio de descanso",
              link: "https://fitcron.com/exercise/extension-vertical-en-pronacion-en-polea-alta-triceps/"
            },
            {
              nombre: "Extensión de tríceps a una mano con polea (agarre supino)",
              series: ["3 series"],
              repeticiones: ["8 - 12reps"],
              detalle: "El mayor control posible, apretando 2s al final de cada repetición",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/extension-de-triceps-a-una-mano-con-polea-agarre-supino/"
            }
          ]
        },
        
      ]
    }
  },
  
  {
    dia: "Martes",
    titulo: "Cuadriceps - Hombro",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Cuadriceps",
          ejercicios: [
            {
              nombre: "Press de piernas",
              series: ["4 series"],
              repeticiones: ["8 reps (bajando y subiendo en 3s) + 8 reps (bajando y subiendo en 1s)"],
              detalle: "Control total del movimiento, cuidando tiempos (manejar pesos exigentes)",
              descanso: "2 minutos y medio de descanso",
              link: "https://eresfitness.com/press-de-pierna/"
            },
            {
              nombre: "Aductor Interno en Máquina",
              series: ["3 series"],
              repeticiones: ["10s isometricos + 12 - 15 reps (extendiendo y contrayendo en 3s)"],
              detalle: "Control total del movimiento, los isometricos se realizan en la extension",
              descanso: "1 minuto y medio",
              link: "https://fitcron.com/exercise/aductor-interno-en-maquina-pierna/"
            },
            {
              nombre: "Extensione de cuádriceps",
              series: ["2 series", "2 series"],
              repeticiones: ["20 reps (subiendo y bajando en 1s)","8 - 12 reps (subiendo y bajando en 3s)"],
              detalle: "Control total del movimiento, las primeras 2 series son con peso neutro, las segundas son con peso exigente",
              descanso: "2 minutos y medio",
              link: "https://eresfitness.com/extension-de-piernas-en-maquina/"
            },
            {
              nombre: "Pantorrilla en maquina costurera",
              series: ["3 series"],
              repeticiones: ["20 reps"],
              detalle: "Control total del movimiento, manteniendo 2s arriba y bajando lentamente",
              descanso: "2 minutos",
              link: "https://eresfitness.com/elevacion-de-talones-sentado/"
            },
            {
              nombre: "Femoral recostado",
              series: ["3 series"],
              repeticiones: ["12 - 15 reps"],
              detalle: "Control total del movimiento, 1s al subir | 3s al bajar",
              descanso: "2 minutos",
              link: "https://eresfitness.com/curl-femoral-acostado-en-maquina/"
            },
          ]
        },
        {
            grupoMuscular: "Hombro",
            ejercicios: [
              {
                nombre: "Press Militar con mancuernas ",
                series: ["4 series"],
                repeticiones: ["8 reps (subiendo y bajando en 3s) + fallo explosivas (subiendo y bajando en 1s)"],
                detalle: "Control total del movimiento, respeta los segundos (carga neutra)",
                descanso: "2 minutos y medio",
                link: "https://eresfitness.com/press-militar-con-mancuernas-o-barra/"
              },
              {
                nombre: "Laterales individuales (recargado en un pilar)",
                series: ["3 series"],
                repeticiones: ["Agutamos 8s + 10 reps por lado"],
                detalle: "Control total del movimiento, los segundos se aguantan con el brazo extendido",
                descanso: "1 minuto y medio de descanso",
                link: "https://youtu.be/256T3BjiUnU"
              },
              {
                nombre: "Vuelos posteriores en polea",
                series: ["4 series"],
                repeticiones: ["15 reps"],
                detalle: "Controlando movimiento, apretando 2s",
                descanso: "1 minuto y medio de descanso",
                link: "https://eresfitness.com/aperturas-posteriores-en-polea/"
              },
              {
                nombre: "Jalon a la barbilla",
                series: ["3 series"],
                repeticiones: ["15 reps"],
                detalle: "Controlando movimiento, apretando 2s en la parte alta",
                descanso: "1 minuto y medio de descanso",
                link: "https://fitcron.com/exercise/remo-al-menton-cerrado-con-barra-z-deltoides/"
              },
            ]
        }
      ]
    }
  },
  {
    dia: "Miercoles",
    titulo: "Espalda - Biceps",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Espalda",
          ejercicios: [
            {
              nombre: "Jalón al pecho (agarre abierto)",
              series: ["3 series"],
              repeticiones: ["10s apretando + 10 reps (subiendo y bajando en 1s)"],
              detalle: "El apretar es abajo y se continua con las reps",
              descanso: "2 minutos",
              link: "https://youtu.be/bHl2Q3tsN9U"
            },
            {
              nombre: "Remo sentado en polea baja (agarre V)",
              series: ["1 serie", "3 series"],
              repeticiones: ["15 reps", "8-12 reps"],
              detalle: "Subiendo y bajando en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/remo-sentado-en-polea-baja/"
            },
            {
              nombre: "Pull over con cuerda",
              series: ["4 series"],
              repeticiones: ["6 - 8 reps (egigentes) + 10 reps (bajamos el peso)"],
              detalle: "Control total del movimiento, trata que el regreso sea lo mayor controlado posible",
              descanso: "2 minutos",
              link: "https://www.simplyfitness.com/es/pages/rope-pulldown"
            },
            {
              nombre: "Jalón al pecho (agarre abierto)",
              series: ["3 series"],
              repeticiones: ["15 reps"],
              detalle: "Subiendo y bajando en 3s (apretamos 2s al final de cada rep)",
              descanso: "2 minutos",
              link: "https://eresfitness.com/jalon-al-pecho-agarre-abierto/"
            },
            
            
          ]
        },
        {
          grupoMuscular: "Bíceps",
          ejercicios: [
            {
              nombre: "Curl martillo en polea (con cuerda)",
              series: ["3 series"],
              repeticiones: ["10 reps (sosteniendo 2s arriba)"],
              detalle: "Control total del movimiento, bajando lentamente hasta esitar el brazo",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-martillo-en-polea-con-cuerda/"
            },
            {
              nombre: "Curl predicador en máquina",
              series: ["3 series"],
              repeticiones: ["15 reps"],
              detalle: "Control total del movimiento, sostener 2s arriba y bajar lentamente",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/curl-concentrado-en-maquina/"
            },
            {
              nombre: "Curl invertido con barra",
              series: ["4 series"],
              repeticiones: ["8 reps controladas", "8 reps parciales"],
              detalle: "Control total del movimiento, (las parciales son de a medias del cuerpo hasta tocar las piernas)",
              descanso: "2 minutos",
              link: "https://eresfitness.com/curl-de-biceps-invertido-con-barra/"
            }
          ]
        }
      ]
    }
  },
  {
    dia: "Jueves",
    titulo: "Femoral - Hombro",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Femoral",
          ejercicios: [
            {
              nombre: "Curl de femoral individual",
              series: ["3 series"],
              repeticiones: ["8 - 12 reps controladas"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/curl-de-pierna-de-rodillas-en-maquina/"
            },
            {
              nombre: "Peso muerto rumano con barra",
              series: ["3 series exigentes"],
              repeticiones: ["10 - 15 reps"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s ",
              descanso: "2 minutos y medio",
              link: "https://eresfitness.com/peso-muerto-rumano/"
            },
            {
              nombre: "Prensa Horizontal",
              series: ["3 series exigentes "," ------------------ ","  1 serie DropSet"],
              repeticiones: ["8 reps"," ------------------ ","6 reps +  6 reps, bajamos una placa + 8 reps a fallo"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s (exigente), la serie DropSet hacemos 6 reps (bajamos una placa) + 6 reps (bajamos otra placa) + 8 reps a fallo",
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-pierna-horizontal-sentado-en-maquina/"
            },
            {
              nombre: "Bulgaras con el par de mancuernas (activación de glúteos)",
              series: ["3 series"],
              repeticiones: ["21 reps"],
              detalle: "Realizamos 7 reps con las dos mancuernas | 7 reps con solo una mancuerna | 7 reps sin mancuernas",
              descanso: "2 minutos",
              link: "https://emetraininguy.com/blog/f/modificar-sentadillas-b%C3%BAlgaras"
            }
          ]
        },
        {
          grupoMuscular: "Hombro",
          ejercicios: [
            {
              nombre: [ " | SERIE COMPUESTA | Elevaciones Laterales con Mancuernas + Elevaciones frontales con mancuernas "],
              series: ["4 series"],
              repeticiones: [" 15 reps para ambos ejercicios "],
              detalle: "Control total de movimiento, bajando en 2s y subiendo en 2s, (ambos ejercicios se realizan en la misma serie, no hay descanso hasta culminar ambos ejercicios)",
              descanso: "2 minuto y medio",
              link: "https://eresfitness.com/elevaciones-laterales-con-mancuernas/"
              
            },
           
            {
              nombre: "Vuelos posteriores en poleas",
              series: ["4 series"],
              repeticiones: ["12-15 reps"],
              detalle: "Lo mayor controlado posible",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/aperturas-posteriores-en-polea/"
            },
            {
              nombre: "Maquina de hombro (Agarre neutro) de manera individual",
              series: ["3 series"],
              repeticiones: ["8 - 10 reps"],
              detalle: "Bajamos y subimos en 3s (primero se trabaja un brazo y posteriormente el otro)",
              descanso: "1 minuto y medio de descanso",
              link: "https://eresfitness.com/press-de-hombros-en-maquina/"
            }
          ]
        },
        
      ]
    }
  },
  {
    dia: "Viernes",
    titulo: "Pecho - Triceps",
    
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Pecho",
          ejercicios: [
            {
              nombre: "Press banco plano con barra",
              series: [ "4 series "],
              repeticiones: ["10 reps bajando y subiendo en 3s","+","10 reps bajando y subiendo en 1s"],
              detalle: "Control total del movimiento, las reps se hacen con el mismo peso, pero a diferente tempo",
              descanso: "2 minutos y medio",
              link: "https://eresfitness.com/press-de-banca-con-barra/"
            },
            {
              nombre: "Cruces en polea alta (cross over)",
              series: ["3 series exigentes"],
              repeticiones: ["8 - 10 reps"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/cruces-en-polea-alta-crossover/"
            },
            {
              nombre: "Press inclinado con mancuernas",
              series: ["3 series "],
              repeticiones: ["10s isometricos + 10 reps"],
              detalle: "Control total del movimiento, los isometricos son aguantando con los brazos abajo y despues se realizan las reps",
              descanso: "1 minuto y medio",
              link: "https://eresfitness.com/press-de-banca-inclinado-con-mancuernas/"
            },
          ]
        },
        {
          grupoMuscular: "Tríceps",
          ejercicios: [
            {
              nombre: "Extensión de triceps con mancuernas acostado (agarre prono)",
              series: ["4 series"],
              repeticiones: ["12 - 15 reps "],
              detalle: "Las repeticiones de realizan bajando en 3s y subiendo en 3s (peso neutro)",
              descanso: "2 de descanso",
              link: "https://eresfitness.com/extension-de-triceps-con-mancuernas-acostado-agarre-prono/"
            },
            {
              nombre: "Extensión de tríceps predicador en máquina",
              series: ["3 series"],
              repeticiones: ["Aguantamos 10s con los brazos extendidos y depues realizamos 10 reps"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 3s",
              descanso: "2 minutos",
              link: "https://eresfitness.com/extension-de-triceps-concentrado-en-maquina/"
            },
            {
              nombre: "Extensión de tríceps en polea (agarre supino)",
              series: ["4 series"],
              repeticiones: ["8 - 15 reps"],
              detalle: "Exigentes y controlando las subida y bajada (Exentrica | concentrica) y muñecas siempre rectas",
              descanso: "2 minutos",
              link: "https://eresfitness.com/extension-de-triceps-en-polea-agarre-supino/"
            }
          ]
        },
        
      ]
    }
  },
  {
    dia: "Sabado",
    titulo: "Espalda - Biceps",
    tipo: "detallada",
    contenido: {
      secciones: [
        {
          grupoMuscular: "Cuadriceps",
          ejercicios: [
            {
              nombre: "Extension de cuadriceps",
              series: ["3 series (individuales)"],
              repeticiones: ["8 - 12 reps controladas"],
              detalle: "Control total del movimiento, bajando en 3s y subiendo en 1s (por pierna)",
              descanso: "1 minuto y medio",
              link: "https://eresfitness.com/extension-a-una-pierna-en-maquina/"
            },
            {
              nombre: "Sentadilla perfecta",
              series: ["3 series "],
              repeticiones: ["12 - 15 reps "],
              detalle: "Control total del movimiento, trata de ejecutarlas lo más lento posible, cuando ya estes por fallar realizar el recorrido continuo (subiendo y bajando en 1s)",
              descanso: "2 minutos",
              link: "https://www.youtube.com/watch?v=RLukBYNagk8"
            },
            {
              nombre: "Aductores",
              series: ["3 series compuestas"],
              repeticiones: ["15 reps abriendo y cerrado en 1s + 6 - 8 reps abriendo y cerrando en 3s"],
              detalle: "Control total del movimiento, coloca un mismo peso para que te permita realizar todas las reps",
              descanso: "2 minutos",
              link: "https://eresfitness.com/aductores-en-maquina/8"
            },
            {
              nombre: "Prensa",
              series: ["4 series compuestas"],
              repeticiones: ["10 reps controladas (subiendo y bajando en 3s) + 10 reps continuas (subiendo y bajando en 1s)"],
              detalle: "Control total del movimiento, coloca un peso exigente pero que te permita realizar todas las reps",
              descanso: "2 minutos",
              link: "https://eresfitness.com/press-de-pierna-posicion-abierta/"
            },
            
          ]
        },
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
        },
        
      ]
    }
  },
];

export default rutinasData;
