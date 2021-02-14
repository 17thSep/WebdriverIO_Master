exports.config={
    runner:'local',    
    specs: [
        './test/**/*.ts'
    ],
    capabilities: [{
        browserName: 'chrome',                
    },{
        browserName: 'firefox',
    }],    
    framework: 'mocha',  
    reporter:'dot',
    services:['docker'],
    autoCompileOpts: {
        autoCompile: true, 
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'            
        }
    }
}