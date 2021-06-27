module.exports = function(eleventyConfig) {
	eleventyConfig.addCollection('hvem', function(collection) {
		return collection.getAll().filter(post => post.data.hvem)
	})

	eleventyConfig.addPassthroughCopy('./src/assets')
	eleventyConfig.addPassthroughCopy('./src/admin')

	return {
		dir: {
			input: 'src',
			output: 'public'
		}
	}
}
