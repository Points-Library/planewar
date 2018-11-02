
module.exports = {
	entry: "./js/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},

	module : {
         //加载器
        loaders : [
              //处理css
            {test : /\.css$/, loader : "style-loader!css-loader"},
              //处理图片
             {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 2048, // 小于2kb的图片处理成base64
                    name: 'img/[name].[ext]',
                    publicPath:"./dist/"
                }
            }
        ]
    }
}