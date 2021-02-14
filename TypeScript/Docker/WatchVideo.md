If you are using WDIO 7 or Typescript, the steps for running in docker remains the same.

Take a look at the notes below to run your scripts in docker in 2 different ways

DOCKER (GRID + NODE): explained here https://youtu.be/NDt4alzH5E0 for WDIO6.

    Run this below command to run your Mocha scripts with TypeScript in Docker containers

    `cd WEBDRIVERIO_MASTER/TypeScript/Docker`
    `docker-compose up`

    Open a new terminal
    `npm install`
    `npm run inGrid`

    Here i have created 3 scripts which you can run in Docker conatiners.
    I have both firefox and chrome contianers and running the above commands 
    will run in those containers

    If you have script running locally and want to run in docker,

    Step 1: Create a docker-compose.yml file and enter the details as you please
    Step 2: npm i wdio-docker-service
    Step 3: change your services in wdio.conf.js to point to 'docker'
    Step 4: Run 'docker-compose up' and wait for the containers to be up
    Step 5: Run 'npm test' or 'npx wdio run wdio.conf.js'

DOCKER (IMAGES): explained here https://youtu.be/Yjg476fg1l0 for WDIO6.

    Run this below command to run your Mocha scripts with TypeScript by creating a Docker image

    `cd WEBDRIVERIO_MASTER/TypeScript/Docker`
    `docker build -t wdioDocker:v1 .`    
    `docker run wdioDocker:v1`

    Here i have created 3 scripts which you can run in Docker conatiners.
    I have headless chrome configured and running the above commands 
    will run in docker containers

    If you have script running locally and want to run in docker,

    Step 1: Create a Dockerfile and enter the details as you please. I have created all the way from scratch with chrome 87
    Step 2: npm i wdio-docker-service //
    Step 3: change your 'services' in wdio.conf.js{here wdioConfigDockerImages.js} to point to 'chromedriver, docker'
    Step 4: Configure headless chrome by adding the below to Capabilities in wdio.conf.js{here wdioConfigDockerImages.js}
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless']
            }  
    Step 5: Now all you have to do it to create an image and run it by running the below commands
            `docker build -t wdioDocker:v1 .`    
            `docker run wdioDocker:v1`
    
    Note: If you want to mount volumes, run the commands accordingly. You can refer to my video where i have explained it step by step.