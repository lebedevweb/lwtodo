const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
	transpileDependencies: true,

	css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "@/sass/style.sass"',
			},
		},
		sourceMap: true,
	},

	configureWebpack: (config) => ({
		devServer: {
			host: "localhost",
			port: 8080,
			open: {
				app: {
					name: "firefox",
				},
			},
		},
	}),

	productionSourceMap: false,
});
