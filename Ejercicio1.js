'Use strict';

let programadores = [
  {
    nombre: 'Juan',
    id: 1,
    tareas: [
      {
        nombreTarea: 'Tarea 1.1',
        idTarea: 1.1,
        tiempoDesarrollo: '25 horas',
      },
      {
        nombreTarea: 'Tarea 1.2',
        idTarea: 1.2,
        tiempoDesarrollo: '10 horas',
      },
      { nombreTarea: 'Tarea 1.3', idTarea: 1.3, tiempoDesarrollo: '2 horas' },
      {
        nombreTarea: 'Tarea 1.4',
        idTarea: 1.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
  {
    nombre: 'Lucia',
    id: 2,
    tareas: [
      { nombreTarea: 'Tarea 2.1', idTarea: 2.1, tiempoDesarrollo: '5 horas' },
      { nombreTarea: 'Tarea 2.2', idTarea: 2.2, tiempoDesarrollo: '1 hora' },
      {
        nombreTarea: 'Tarea 2.3',
        idTarea: 2.3,
        tiempoDesarrollo: '26 horas',
      },
      {
        nombreTarea: 'Tarea 2.4',
        idTarea: 2.4,
        tiempoDesarrollo: '3.75 horas',
      },
    ],
  },
  {
    nombre: 'David',
    id: 3,
    tareas: [
      { nombreTarea: 'Tarea 3.1', idTarea: 3.1, tiempoDesarrollo: '7 horas' },
      {
        nombreTarea: 'Tarea 3.2',
        idTarea: 3.2,
        tiempoDesarrollo: '6 horas',
      },
      {
        nombreTarea: 'Tarea 3.3',
        idTarea: 3.3,
        tiempoDesarrollo: '9 horas',
      },
      {
        nombreTarea: 'Tarea 3.4',
        idTarea: 3.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
  {
    nombre: 'Manuel',
    id: 4,
    tareas: [
      { nombreTarea: 'Tarea 4.1', idTarea: 4.1, tiempoDesarrollo: '7 horas' },
      {
        nombreTarea: 'Tarea 4.2',
        idTarea: 4.2,
        tiempoDesarrollo: '16 horas',
      },
      {
        nombreTarea: 'Tarea 4.3',
        idTarea: 4.3,
        tiempoDesarrollo: '29 horas',
      },
      {
        nombreTarea: 'Tarea 4.4',
        idTarea: 4.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
];

//Usando bucles
let tareas = [];
let tiempo = [];
let nombre = '';
let mayor = 0;

for (let i = 0; i < programadores.length; i++) {
  //Se recorre los arrays para encontrar el tiempo de desarrollo
  tareas.push(programadores[i].tareas);
  for (let j = 0; j < tareas.length; j++) {
    tiempo = Number(
      tareas[i][j].tiempoDesarrollo.replace('horas', '').replace('hora', '')
    ); //Se convierten en numeros los tiempos
    if (tiempo > mayor) {
      //Se controla si el primero es mayor que el siguiente, se guarda en una variable y tambien se guarda el nombre de la tarea si es mayor que el anterior numero
      mayor = tiempo;
      nombre = tareas[i][j].nombreTarea;
    }
  }
}
console.log(
  'La tarea con mayor tiempo de desarrollo es la ' +
    nombre +
    ' con ' +
    mayor +
    ' horas'
);

//Usando metodos de los arrays
let tiempoTarea = [];
let tiempo1 = [];
let nombre1 = '';
let mayor1 = 0;

programadores.forEach((programador) => {
  //Se recorre el array para encontrar los tiempos de desarrollo
  programador.tareas.forEach((tarea) => {
    tiempo1.push(
      Number(tarea.tiempoDesarrollo.replace('horas', '').replace('hora', ''))
    ); //Se guarda en array y se convierte a numero los tiempos
    tiempoTarea.push(
      Number(tarea.tiempoDesarrollo.replace('horas', '').replace('hora', '')),
      tarea.nombreTarea
    ); //Se guarda en array los tiempos y el nombre de la tarea
  });
});
mayor1 = tiempo1.sort((a, b) => {
  return b - a;
}); //Se ordena los tiempos de mayor a menor
nombre1 = tiempoTarea.indexOf(mayor1[0]) + 1; //Se coge el primer numero del array ordenado que será el mayor y se busca en que indice se encuentra en el array donde se guardan los tiempos y el nombre de la tarea, y se le suma uno para sacar el nombre de la tarea que mas tiempo ocupa
console.log(
  'La tarea con mayor tiempo de desarrollo es la ' +
    tiempoTarea[nombre1] +
    ' con ' +
    mayor1[0] +
    ' horas'
);
