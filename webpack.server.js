const path=require("path")
const merge=require("webpack-merge");
const baseConfig=require("./webpack.base.js")
const webpackNodeExternals=require("webpack-node-externals")

const config={
    //infrom webpack we build a bundle in nodejs
    target:"node",
    //tell webpack the root file of our application
    entry:"./src/index.js",

    //tell webpack where to put the output file
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"build")
    },
    externals:[webpackNodeExternals]

    
}
module.exports=merge(baseConfig,config)