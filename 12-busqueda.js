const inputBusqueda = document.querySelector('#txtBusqueda')

const historias = [
	{id: 1, nHistoria: 2000, cNombrePaciente: 'Johnny', cApellidoPaternoPaciente: 'Pacheco', edad: 34}
	,{id: 2, nHistoria: 2710, cNombrePaciente: 'Cinthia   ', cApellidoPaternoPaciente: '    Vidalón', edad: 33}
	,{id: 3, nHistoria: 1000, cNombrePaciente: 'Daniel', cApellidoPaternoPaciente: 'Martell', edad: 8}
	,{id: 4, nHistoria: 1000, cNombrePaciente: 'Andrea', cApellidoPaternoPaciente: 'Martell', edad: 17}
	,{id: 5, nHistoria: 2000, cNombrePaciente: "Clarisa", cApellidoPaternoPaciente: "        Barco    ", edad: 15}
	,{id: 6, nHistoria: 2010, cNombrePaciente: "Maritza", cApellidoPaternoPaciente: "Hidalgo   ", edad: 8}
	,{id: 7, nHistoria: 2011, cNombrePaciente: "Carmen", cApellidoPaternoPaciente: "   Villanueva", edad: 39}
	,{id: 8, nHistoria: 2013, cNombrePaciente: "Delia   ", cApellidoPaternoPaciente: "Tazza   ", edad: 89}
	,{id: 9, nHistoria: 2014, cNombrePaciente: "Mario", cApellidoPaternoPaciente: "Alcazaba", edad: 20}
	,{id: 10, nHistoria: 2015, cNombrePaciente: "Bertha", cApellidoPaternoPaciente: "Moreno", edad: 20}
]

inputBusqueda.addEventListener('keyup', function(e) {
	const textoABuscar = this.value
	const filtrado = historias.filter(historia => {
		return historia.cNombrePaciente.toLowerCase().indexOf(textoABuscar.toLowerCase()) >=0 || 
		historia.cApellidoPaternoPaciente.toLowerCase().indexOf(textoABuscar.toLowerCase()) >=0
	})

	console.log(filtrado)
})