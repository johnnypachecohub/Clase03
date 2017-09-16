const historias = [
	{id: 1, nHistoria: 2000, cNombrePaciente: 'Johnny', cApellidoPaternoPaciente: 'Pacheco', edad: 34},
	{id: 2, nHistoria: 2710, cNombrePaciente: 'Cinthia   ', cApellidoPaternoPaciente: '    Vidalón', edad: 33},
	{id: 3, nHistoria: 1000, cNombrePaciente: 'Daniel', cApellidoPaternoPaciente: 'Martell', edad: 8},
	{id: 4, nHistoria: 1000, cNombrePaciente: 'Andrea', cApellidoPaternoPaciente: 'Martell', edad: 17}
]

const ordenado = historias.sort((a, b) => {
	return a.edad < b.edad
	//los false van primero en el orden, para corregir eso se pueden hacer 2 casos:
	//a.edad < b.edad ? -1 : 1
	//a.edad > b.edad
})

console.log(ordenado)
