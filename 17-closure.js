/*
const nombreMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const obtenerNombreMes = numMes => {
	console.log(nombreMeses[numMes-1])
}

obtenerNombreMes(5)
*/
//la variable nombreMeses es riesgo, xq puede ser modificada en algun lado de la funcion



const obtenerNombreMes = () => {
	const nombreMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
	
	return (numMes) => {
		console.log(nombreMeses[numMes-1])
	}
}

const funcion = obtenerNombreMes()
funcion(5)
funcion(8)
//la ventaja es q se ejecuta la funcion anonima una sola vez, solo qda en memoria 1 sola vez
//Angular tiene este estilo


const servicioHttp = () => {
	const apiBase = 'http://javascript/tibajodemanda.com'
	const apiInsertar = `${apiBase}/insertar`
	
	const insertar = () => { console.log('insertar') }
	const actualizar = () => { console.log('actualizar') }
	const eliminar = () => { console.log('eliminar') }
	const listar = () => { console.log('listar') }

	return {
		insertar: insertar, actualizar, eliminar, listar
	}
	//este return devuelve un json
}

const miServicio = servicioHttp()
miServicio.insertar()
