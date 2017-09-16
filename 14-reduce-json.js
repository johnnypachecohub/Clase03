const cursos = ['Angular', 'Node', 'Angular', 'Javascript', 'Phaser', 'Node', 'Vue']

const sumario = cursos.reduce((acumulador, curso) => {
	if (acumulador[curso]) {
		acumulador[curso] += 1
	}
	else {
		acumulador[curso] = 1
	}

	return acumulador
}, {})
//puede devolver cualquier tipo: numero, json, arreglo, etc
console.log(sumario)
