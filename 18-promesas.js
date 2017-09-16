const promesa = new Promise((resolve, reject) => {
	//settimeout simulamos la demora de un apirest
	setTimeout(() => {
		const registros = [
			{ id: 1, nombre: 'Johnny'},
			{ id: 2, nombre: 'Cinthia'}
		]
		//resolve(registros)

		//ese parametro del reject es opcional o podemos generar el parametro q deseemos
		reject({
			numError: 501,
			mensaje: 'Error del servidor'
		})  //si no se cumplio la promesa, genera una excepcion (catch)
	}, 4000)
})
/*  Una forma de declarar
promesa.then((reg) => {
	console.log(reg)
	console.log('promesa cumplida')
})

promesa.catch((error) => {
	console.log(error)
	console.log('promesa rechazada')
})
*/
promesa
	.then((reg) => {
		console.log(reg)
		console.log('promesa cumplida')

		//una promesa puede retornar otra promesa
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve()
			}, 2000)
		})
	})
	.then(() => {
		console.log('segunda promesa cumplida')
	})
	.catch((error) => {
		console.log(error)
		console.log('promesa rechazada')
	})
