exports.config={
    runner:'local',    
    specs: [
        './test/**/*.ts'
    ],    
    capabilities: [{
        browserName: 'chrome',                
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless']
        }          
    }],    
    framework: 'mocha',  
    reporter:'dot',
    services: ['chromedriver','docker'],
    autoCompileOpts: {
        autoCompile: true, 
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'            
        }
    }
}