import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.addCollection('hvem', function(collection) {
		return collection.getAll().filter(post => post.data.hvem)
	})

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ['webp'],
    widths: ['auto'],
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async',
      }
    },
    pictureAttributes: {}
  })

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	eleventyConfig.addPassthroughCopy('./src/assets')
	eleventyConfig.addPassthroughCopy('./src/admin')

	return {
		dir: {
			input: 'src',
			output: 'public'
		}
	}
}
