module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/assets')
	eleventyConfig.addPassthroughCopy('./src/config')

	return {
		dir: {
			input: 'src',
			output: 'public'
		}
	}
}
