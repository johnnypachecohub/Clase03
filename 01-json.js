const usuario = {}   //json vacio

const persona = {
	nombre: 'Johnny',
	cursos: ['HTML 5', 'Javacript', 'Angular', 'Node', 'Phaser']
}
//de forma dinamica tambien se pueden crear propiedades
persona.edad = 34
//persona['edad']

for (let propiedad in persona) {
	console.log(propiedad)
}

//tipo firebird
const productos = {
	'-propiedad1': {nombre: 'Johnny', edad: 34},
	'-propiedad2': {nombre: 'Luis', edad: 33},
	'-propiedad3': {nombre: 'Cinthia', edad: 34}
}
let filas = ''
for (let propiedad in productos) {
	filas += `
		<tr>
			<td>${productos[propiedad].nombre}</td>
			<td>${productos[propiedad]['edad']}</td>
		</tr>
	`
}
console.log(filas)
