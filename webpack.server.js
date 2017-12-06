const path=require("path")
module.exports={
    //infrom webpack we build a bundle in nodejs
    target:"node",
    //tell webpack the root file of our application
    entry:"./src/index.js",

    //tell webpack where to put the output file
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"build")
    },
    //tell webpack to run babel on every file
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:"babel-loader",
                exclude:/node_modules/,
                options:{
                    presets:[
                        "react",
                        "stage-0",
                        ["env",{targets:{browsers:["last 2 versions"]}}]
                    ]
                }
            }
        ]
    }
}