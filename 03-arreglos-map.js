const personas = ['Johnny', 'Luis', 'Cinthia', 'Paola']

const nombres = personas.map((elemento, indice) => {
	return elemento.toUpperCase()
})
console.log(nombres)

const tbody = document.querySelector('tbody')
const historias = [
	{id: 1, nHistoria: 2000, cNombrePaciente: 'Johnny', cApellidoPaternoPaciente: 'Pacheco', edad: 34},
	{id: 2, nHistoria: 2710, cNombrePaciente: 'Cinthia   ', cApellidoPaternoPaciente: '    Vidalón', edad: 33},
	{id: 3, nHistoria: 1000, cNombrePaciente: 'Dante', cApellidoPaternoPaciente: 'Pacheco', edad: 8},
]
const nombreCompleto = (nombre, apellido) => {
	return `${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}`
}
let filas = historias.map(historia => {
	return `
		<tr>
			<td>${historia.id}</td>
			<td>${historia.nHistoria}</td>
			<td>${nombreCompleto(historia.cNombrePaciente, historia.cApellidoPaternoPaciente)}</td>
			<td>${historia.edad}</td>
		</tr>
	`
})
console.log(filas)   //aqui genera una separacion por comas
filas = filas.join('')
tbody.innerHTML = filas

//otra forma mas reducida para hacer el join (encadenamiento de funciones)
// const filas = historias.map(...).join('')
