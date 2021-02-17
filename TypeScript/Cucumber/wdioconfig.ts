exports.config={
    runner:'local',    
    specs: [
        './test/feature-file/**/*.feature'
    ],
    capabilities: [{
        browserName: 'chrome',        
    }],    
    framework: 'cucumber', 
    cucumberOpts: {        
        require: ['./test/step-definition/*.ts'],
    },
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