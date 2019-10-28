module.exports={
	entry:{
		'index':'./src/index.js'
	},
	output:{
		filename:'[name].js',
		path:__dirname +'/dist',
		publicPath:'/dist/'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env']
					}
				}
			}
		]
	}
}