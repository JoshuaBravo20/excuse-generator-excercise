function getExcuse() {

let quien = ['Mi Perro', 'El Vecino', 'La tortuga', 'Mi Padre', 'Un Ladron', 'Mi papa', 'Mi mama', 'El Gato'];
let accion = ['mordio', 'me robo', 'dejo caer', 'rompio', 'incendio', 'orino', 'lavo en agua', 'arruino'];
let que = ['mi tarea', 'mi telefono', 'mi casa', 'mi ropa', 'mis zapatos', 'mi mochila', 'mi escritorio', 'mi sudadera'];
let cuando = ['anoche', 'hace 1 semana', 'hace 2 horas', 'ayer en la tarde', 'hace 1 mes', 'hace 1 año', 'justo ahora'];

let azar1 = Math.floor(Math.random() * quien.length);
let azar2 = Math.floor(Math.random() * accion.length);
let azar3 = Math.floor(Math.random() * que.length);
let azar4 = Math.floor(Math.random() * cuando.length);

document.querySelector('#excuse').innerHTML = quien[azar1] + ' ' + accion[azar2] + ' ' + que[azar3] + ' ' + cuando[azar4];

}








