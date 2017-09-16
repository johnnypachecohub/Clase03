const personas = ['Johnny', 'Luis', 'Cinthia', 'Paola']

const nombres = personas.map((elemento, indice) => {
	return elemento.toUpperCase()
})
console.log(nombres)
