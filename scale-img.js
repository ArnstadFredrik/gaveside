const im = require('imagemagick')

console.log('scale-img imagemagick test')

im.identify('./src/assets/img/foodprosessor.webp', function(err, data){
	if (err) throw err

	console.log(data)
})
