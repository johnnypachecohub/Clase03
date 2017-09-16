const historias = [
	{id: 1, nHistoria: 2000, cNombrePaciente: 'Johnny', cApellidoPaternoPaciente: 'Pacheco', edad: 34},
	{id: 2, nHistoria: 2710, cNombrePaciente: 'Cinthia   ', cApellidoPaternoPaciente: '    Vidalón', edad: 33},
	{id: 3, nHistoria: 1000, cNombrePaciente: 'Daniel', cApellidoPaternoPaciente: 'Martell', edad: 8},
	{id: 4, nHistoria: 1000, cNombrePaciente: 'Andrea', cApellidoPaternoPaciente: 'Martell', edad: 17}
]

const menor = historias.find(historia => {
	return historia.edad == 8
	//si se colocase '<' o '>' trae solo 1 (el primero que encuentre)
})
console.log(menor)