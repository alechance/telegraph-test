module.exports = {
	paths: {
		html: {
			inline: {
				src: [ 'src/**/*.html' ],
				dest: [ 'dist' ],
			},
			clean: {
				src: [ 'dist/**/*.html' ],
				dest: [ 'dist' ],
			},
		},
		sass: {
			lint: {
				src: [ 'src/scss/**/*.scss' ],
				configFile: './node_modules/@slicejack/bojler/.stylelintrc',
			},
			build: {
				src: [ 'src/scss/*.scss' ],
				dest: [ 'dist/css' ],
			},
			clean: {
				src: [ 'dist/css' ],
			},
		},
		watch: {
			src: [
				'src/scss/**/*.scss',
				'src/**/*.html',
			],
		},
		release: {
			versionedFiles: [
				'README.md',
			],
		},
	},
};
