
module.exports = {
    entry: "./public/app.js",
    output: {
        path: __dirname,
        filename: "./public/javascripts/bundle.js"
    },watch:true,
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
                  }
            },{
            test: /\.json$/,
            loader: "json-loader"
            }
        ]
    }
};
