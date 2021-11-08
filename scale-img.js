const im = require('imagemagick')
const { readdir } = require('fs/promises')

const read = async (dir) => {
	const files = await readdir(dir)
	for (const file of files) {
		console.log(file)
	}
}

try {
	read('./')
} catch (err) {
	console.error(err)
}

// console.log('scale-img imagemagick test')

// im.identify('./src/assets/img/foodprosessor.webp', function(err, data){
// 	if (err) throw err
// 
// 	console.log(data)
// })
