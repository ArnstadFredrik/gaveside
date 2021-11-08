const im = require('imagemagick')

im.identify('./src/assets/img/foodprosessor.webp', function(err, data){
	if (err) throw err

	console.log(data)
})
