/* 1.- Ordenar a todos los personajes por nombre de manera ascendente y descendente mostrarlos en la lista ordenada.
2.- Realizar una busqueda por genero y mostrar el resultado de la busqueda en la lista ordenada.
3.- A partir de dos valores ingresados (altura e indicación si buscara mayor que la altura  o menor que la altura) buscar a todos los personajes que cumplan con los valores ingresados.
4.- Agregar un arreglo con algunas mascotas que pudieran tener los personajes a todo los objetos o en los que se decidan agregar (Inventado)
5.- Ingresar un valor para comparar las alturas de todos los personajes si el valor ingresado es mayor a la altura, agregar un nuevo atributo al objeto que diga "El personaje es muy alto", si el valor es menor a la altura agregar un nuevo atributo al objeto que diga "El personaje es muy bajo"
*/



const starWars = [
	{
		"name": "Luke Skywalker",
		"height": "172",
		"mass": "77",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"gender": "male",
	},
	{
		"name": "C-3PO",
		"height": "167",
		"mass": "75",
		"hair_color": "n/a",
		"skin_color": "gold",
		"eye_color": "yellow",
		"gender": "n/a",
	},
	{
		"name": "R2-D2",
		"height": "96",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, blue",
		"eye_color": "red",
		"gender": "n/a",
	},
	{
		"name": "Darth Vader",
		"height": "202",
		"mass": "136",
		"hair_color": "none",
		"skin_color": "white",
		"eye_color": "yellow",
		"gender": "male",
	},
	{
		"name": "Leia Organa",
		"height": "150",
		"mass": "49",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "brown",
		"gender": "female",
	},
	{
		"name": "Owen Lars",
		"height": "178",
		"mass": "120",
		"hair_color": "brown, grey",
		"skin_color": "light",
		"eye_color": "blue",
		"gender": "male",
	},
	{
		"name": "Beru Whitesun lars",
		"height": "165",
		"mass": "75",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "blue",
		"gender": "female",
	},
	{
		"name": "R5-D4",
		"height": "97",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, red",
		"eye_color": "red",
		"gender": "n/a",
	},
	{
		"name": "Biggs Darklighter",
		"height": "183",
		"mass": "84",
		"hair_color": "black",
		"skin_color": "light",
		"eye_color": "brown",
		"gender": "male",
	},
	{
		"name": "Obi-Wan Kenobi",
		"height": "182",
		"mass": "77",
		"hair_color": "auburn, white",
		"skin_color": "fair",
		"eye_color": "blue-gray",
		"gender": "male",
	}
];

/* efecto modal */
let modal = document.querySelector('.modalType');
let overlay = document.querySelector('.overlay');
let btnClose = document.querySelector('.closeModal');
let abrirModal = document.querySelector('.abrirModal');

let resultado = [...starWars];
let tabla2 = document.getElementById("tabla2");
let addmascota = document.getElementById('addmascota');
let personajeMascota = document.getElementById('personajeMascota');
resultado.forEach(insertarNombreSecleccion => {
	insertarNombreSecleccion.name;
	let insertando = `<option value="${insertarNombreSecleccion.name}">${insertarNombreSecleccion.name}</option>`
	personajeMascota.insertAdjacentHTML("beforeend",insertando);
});
const personajeAlto = 180;

/* MOSTRAR TABLA ORIGINAL */

let tabla1 = document.getElementById('tabla1');
function mostrarArray() {
	starWars.forEach(element => {
		
		let row = document.createElement('tr');
		let name = document.createElement('td');
		let height = document.createElement('td');
		let mass = document.createElement('td');
		let hair_color = document.createElement('td');
		let skin_color = document.createElement('td');
		let eye_color = document.createElement('td');
		let gender = document.createElement('td');
	
		name.innerHTML = element.name;
		height.innerHTML = element.height;
		mass.innerHTML = element.mass;
		hair_color.innerHTML = element.hair_color;
		skin_color.innerHTML = element.skin_color;
		eye_color.innerHTML = element.eye_color;
		gender.innerHTML = element.gender
	
		row.appendChild(name);
		row.appendChild(height);
		row.appendChild(mass);
		row.appendChild(hair_color);	
		row.appendChild(skin_color);	
		row.appendChild(eye_color);	
		row.appendChild(gender);	
		tabla1.appendChild(row);
	});
}


window.onload = mostrarArray;

/* ordenar ascendente y descendente INICIO*/

function descendente() {
	openModal();

	while (tabla2.firstChild) {
		tabla2.removeChild(tabla2.firstChild);
	}
	
	resultado.sort(function (a, b) {
		if (a.name > b.name) {
			return -1;
		}
		if (a.name < b.name) {
			return 1;
		}
		// a must be equal to b
		return 0;
	});
	
	resultado.forEach(element => {

		let row = document.createElement('tr');
		let name = document.createElement('td');
		let height = document.createElement('td');
		let mass = document.createElement('td');
		let hair_color = document.createElement('td');
		let skin_color = document.createElement('td');
		let eye_color = document.createElement('td');
		let gender = document.createElement('td');
	
		name.innerHTML = element.name;
		height.innerHTML = element.height;
		mass.innerHTML = element.mass;
		hair_color.innerHTML = element.hair_color;
		skin_color.innerHTML = element.skin_color;
		eye_color.innerHTML = element.eye_color;
		gender.innerHTML = element.gender
	
		row.appendChild(name);
		row.appendChild(height);
		row.appendChild(mass);
		row.appendChild(hair_color);	
		row.appendChild(skin_color);	
		row.appendChild(eye_color);	
		row.appendChild(gender);
		tabla2.appendChild(row);
	});

}

function ascendente() {
	openModal();

	while (tabla2.firstChild) {
		tabla2.removeChild(tabla2.firstChild);
	}
	
	resultado.sort(function (a, b) {
		if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
		// a must be equal to b
		return 0;
	});

	resultado.forEach(element => {
		
		let row = document.createElement('tr');
		let name = document.createElement('td');
		let height = document.createElement('td');
		let mass = document.createElement('td');
		let hair_color = document.createElement('td');
		let skin_color = document.createElement('td');
		let eye_color = document.createElement('td');
		let gender = document.createElement('td');
	
		name.innerHTML = element.name;
		height.innerHTML = element.height;
		mass.innerHTML = element.mass;
		hair_color.innerHTML = element.hair_color;
		skin_color.innerHTML = element.skin_color;
		eye_color.innerHTML = element.eye_color;
		gender.innerHTML = element.gender
	
		row.appendChild(name);
		row.appendChild(height);
		row.appendChild(mass);
		row.appendChild(hair_color);	
		row.appendChild(skin_color);	
		row.appendChild(eye_color);	
		row.appendChild(gender);
		tabla2.appendChild(row);
	});
}
/* ordenar ascendente y descendente FIN*/

/* flitrar por genero INICIO */
let genderSelect = document.getElementById('genderOption');

function filtroGenero() {
	openModal();

	while (tabla2.firstChild) {
		tabla2.removeChild(tabla2.firstChild);
	}
	
	let filtroGender = starWars.filter(genero => genero.gender === genderSelect.value);

filtroGender.forEach(element => {
	let row = document.createElement('tr');
	let name = document.createElement('td');
	let height = document.createElement('td');
	let mass = document.createElement('td');
	let hair_color = document.createElement('td');
	let skin_color = document.createElement('td');
	let eye_color = document.createElement('td');
	let gender = document.createElement('td');
	name.innerHTML = element.name;
	height.innerHTML = element.height;
	mass.innerHTML = element.mass;
	hair_color.innerHTML = element.hair_color;
	skin_color.innerHTML = element.skin_color;
	eye_color.innerHTML = element.eye_color;
	gender.innerHTML = element.gender

	row.appendChild(name);
	row.appendChild(height);
	row.appendChild(mass);
	row.appendChild(hair_color);	
	row.appendChild(skin_color);	
	row.appendChild(eye_color);	
	row.appendChild(gender);
	tabla2.appendChild(row);
});
};

/* flitrar por genero FIN */

/* filtro altura INICIO */
let altura = document.getElementById('altura');
let mayorMenorQue = document.getElementById('mayorMenorQue');

function filtroAltura() {
	openModal();

	while (tabla2.firstChild) {
		tabla2.removeChild(tabla2.firstChild);
	}
	
	if (mayorMenorQue.value === 'Menor que') {
		let filtradoAltura = starWars.filter(element => element.height <= Number(altura.value));
		
		mostrar(filtradoAltura);
	}else if(mayorMenorQue.value === 'Mayor que'){
		let filtradoAltura = starWars.filter(element => element.height >= Number(altura.value));
		mostrar(filtradoAltura);
	}
	
}


function mostrar(filtradoAltura) {
	
	filtradoAltura.forEach(element => {
		let row = document.createElement('tr');
		let name = document.createElement('td');
		let height = document.createElement('td');
		let mass = document.createElement('td');
		let hair_color = document.createElement('td');
		let skin_color = document.createElement('td');
		let eye_color = document.createElement('td');
		let gender = document.createElement('td');
		name.innerHTML = element.name;
		height.innerHTML = element.height;
		mass.innerHTML = element.mass;
		hair_color.innerHTML = element.hair_color;
		skin_color.innerHTML = element.skin_color;
		eye_color.innerHTML = element.eye_color;
		gender.innerHTML = element.gender;
	
		row.appendChild(name);
		row.appendChild(height);
		row.appendChild(mass);
		row.appendChild(hair_color);	
		row.appendChild(skin_color);	
		row.appendChild(eye_color);	
		row.appendChild(gender);
		tabla2.appendChild(row);
	});
};

/* filtro altura FIN */


/* agregar mascota a personaje seleccionado INICIO*/

function agregarMascota(){
	resultado.forEach(element => {
		if (element.name === personajeMascota.value ) {
			element.mascota = addmascota.value;
		}
	});
};

/* agregar mascota a personaje seleccionado FIN*/

/* mostrar quien tiene mascota INICIO */

function filtroMascotas() {
	openModal();
	
	while (tabla2.firstChild) {
		tabla2.removeChild(tabla2.firstChild);
	}

	for (const iterator of resultado) {
		if (iterator.mascota) {
			let row = document.createElement('tr');
			let name = document.createElement('td');
			let height = document.createElement('td');
			let mass = document.createElement('td');
			let hair_color = document.createElement('td');
			let skin_color = document.createElement('td');
			let eye_color = document.createElement('td');
			let gender = document.createElement('td');
			let mascota = document.createElement('td');
			name.innerHTML = iterator.name;
			height.innerHTML = iterator.height;
			mass.innerHTML = iterator.mass;
			hair_color.innerHTML = iterator.hair_color;
			skin_color.innerHTML = iterator.skin_color;
			eye_color.innerHTML = iterator.eye_color;
			gender.innerHTML = iterator.gender;
			mascota.innerHTML = iterator.mascota;

		
			row.appendChild(name);
			row.appendChild(height);
			row.appendChild(mass);
			row.appendChild(hair_color);	
			row.appendChild(skin_color);	
			row.appendChild(eye_color);	
			row.appendChild(gender);
			row.appendChild(mascota);
			tabla2.appendChild(row);
		}
	}
	
};

/* mostrar quien tiene mascota INICIO */

/* mostrar que personajes son muy altos y muy bajos INICIO */

function muyAltoMuyBajo() {
	openModal();

	while (tabla2.firstChild) {
		tabla2.removeChild(tabla2.firstChild);
	}
	
	resultado.forEach(element => {
		if (element.height >= personajeAlto) {
			element.estatus_altura = "Muy alto";
		} else {
			element.estatus_altura = "Muy bajo"
		}
		let row = document.createElement('tr');
		let name = document.createElement('td');
		let height = document.createElement('td');
		let mass = document.createElement('td');
		let hair_color = document.createElement('td');
		let skin_color = document.createElement('td');
		let eye_color = document.createElement('td');
		let gender = document.createElement('td');
		let pet = document.createElement('td');
		let estatus_altura = document.createElement('td');
		name.innerHTML = element.name;
		height.innerHTML = element.height;
		mass.innerHTML = element.mass;
		hair_color.innerHTML = element.hair_color;
		skin_color.innerHTML = element.skin_color;
		eye_color.innerHTML = element.eye_color;
		gender.innerHTML = element.gender;
		pet.innerHTML = `---`;
		estatus_altura.innerHTML = element.estatus_altura;
	
		row.appendChild(name);
		row.appendChild(height);
		row.appendChild(mass);
		row.appendChild(hair_color);	
		row.appendChild(skin_color);	
		row.appendChild(eye_color);	
		row.appendChild(gender);
		row.appendChild(pet);
		row.appendChild(estatus_altura);
		tabla2.appendChild(row);
	});
}

/* mostrar que personajes son muy altos y muy bajos FIN */

/* serrar y abrir modal INICIO */
const openModal = function () {
    modal.style.display = 'unset';
    overlay.style.display = 'unset';
};

const closeModal = function () {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};


/* serrar y abrir modal FIN */
