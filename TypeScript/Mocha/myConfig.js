exports.config={
    runner:'local',    
    specs: [
        './test/**/*.ts'
    ],
    capabilities: [{
        browserName: 'chrome',        
    }],    
    framework: 'mocha',  
    reporter:'dot',
    services:['chromedriver'],
    autoCompileOpts: {
        autoCompile: true, 
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'            
        }
    }
}