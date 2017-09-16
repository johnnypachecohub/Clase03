//indica cuando ha cargado solamente el HTML
document.addEventListener('DOMContentLoaded', function(e){
	console.log('Primero: Evento DOMContentLoaded')
})

window.addEventListener('load', function() {
	console.log('Segundo: load')
})
