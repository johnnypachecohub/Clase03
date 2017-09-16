const obj = new XMLHttpRequest()

//en html solo soporte get y post, pero se puede hacer un artificio para q soporte put y delete 

obj.onreadystatechange = function() {
	//estado 200, respuesta correcta (sin errores)
	if (this.readyState == 4 && this.status == 200) {
		//console.log(this.responseText)
		console.log(JSON.parse(this.responseText))  //solo para q se vea mejor en la consola
	}
}

obj.open('get', 'http://javascript.tibajodemanda/listar', true)
obj.send()
