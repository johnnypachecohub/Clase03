const misRedes = {
	facebook: 'https://www.facebook.com/johnny.pacheco',
	youtube: 'https://www.youtube.com/jplserver',
	linkedin: 'https://linkedin.com/profile/jpacheco'
}

const miFacebook = misRedes.facebook
const miYoutube = misRedes.youtube
const miLinkedin = misRedes.linkedin

const tusRedes = {
	instagram: 'https://instagram.com/tuyo',
	facebook: 'https://www.facebook.com/tuyo',
	linkedin: 'https://linkedin/proile/tuyo',
	google: 'https://googleplus.com/tuyo'
}

const tuInstagram = tusRedes.instagram
const tuFacebook = tusRedes.facebook
const tuLinkedin = tusRedes.linkedin
const tuGoogle = tusRedes.google

//lo anterior funciona bien si fuesen 2 jason

const redesSociales = {
	'-propiedad1': {
		facebook: 'https://www.facebook.com/johnny.pacheco',
		youtube: 'https://www.youtube.com/jplserver',
		linkedin: 'https://linkedin.com/profile/jpacheco'
	},
	'-propiedad2': {
		instagram: 'https://instagram.com/tuyo',
		facebook: 'https://www.facebook.com/tuyo',
		linkedin: 'https://linkedin/proile/tuyo',
		google: 'https://googleplus.com/tuyo'
	}
}
for (let redes in redesSociales) {
	//const rs = redesSociales[redes]
	//aqui viene la desestrcuturacion, los valores de las propiedades deben coincidir con los nombres de las propiedades del json (no interesa el orden)
	//tambien se pueden colocar valores por defecto
	const {facebook='no tiebe fb', youtube='no tiene yt', linkedin='no tiene linked'} = redesSociales[redes]
	console.log('fb', facebook)
	console.log('yt', youtube)
	console.log('link', linkedin)
}

