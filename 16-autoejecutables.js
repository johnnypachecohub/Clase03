//funcion anonima
/*
(function() {
	document.body.style.backgroundColor = 'black'
	console.log('función autoejecutada')
})()
*/

(function(d, w) {
	//sirve para encapsular y aislar el codigo, cualquier variable declarada aqui solo sirve en esta funcion
	//document esta como variable local, mejor performance
	//se pueden enviar tantos parametros se deseen
	w.setTimeout(function() {
		console.log('se ejecuto el timer')
	}, 2000);

	d.body.style.backgroundColor = 'black'
	console.log('función autoejecutada')
})(document, window)
