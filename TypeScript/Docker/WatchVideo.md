# Docker for WebdriverIO
If you are using WDIO 7 or Typescript, the steps for running in docker remains the same. 
Take a look at the notes below to run your scripts in docker in 2 different ways<br>

## DOCKER (GRID + NODE):[Video link](https://youtu.be/NDt4alzH5E0)

   Run this below command to run your Mocha scripts with TypeScript in Docker containers<br>

   *`cd WEBDRIVERIO_MASTER/TypeScript/Docker`*<br>
   *`docker-compose up`*<br>

   Open a new terminal<br>
   *`npm install`*<br>
   *`npm run inGrid`*<br>

   Here i have created 3 scripts which you can run in Docker conatiners.
   I have both firefox and chrome contianers and running the above commands 
   will run in those containers<br>

   If you have script running locally and want to run in docker,<br>

   **Step 1:** Create a docker-compose.yml file and enter the details as you please<br>
   **Step 2:** npm i wdio-docker-service<br>
   **Step 3:** change your services in wdio.conf.js to point to 'docker'<br>
   **Step 4:** Run 'docker-compose up' and wait for the containers to be up<br>
   **Step 5:** Run 'npm test' or 'npx wdio run wdio.conf.js'<br>

## DOCKER (IMAGES):[Video link](https://youtu.be/Yjg476fg1l0)

   Run this below command to run your Mocha scripts with TypeScript by creating a Docker image<br>
   
   *`cd WEBDRIVERIO_MASTER/TypeScript/Docker`<br>
    `docker build -t wdioDocker:v1 .`    <br>
    `docker run wdioDocker:v1`<br>*

   Here i have created 3 scripts which you can run in Docker conatiners.
   I have headless chrome configured and running the above commands 
   will run in docker containers<br>

   If you have script running locally and want to run in docker,<br>

   **Step 1:** Create a Dockerfile and enter the details as you please. I have created all the way from scratch with chrome 87<br>
   **Step 2:** npm i wdio-docker-service //<br>
   **Step 3:** change your 'services' in wdio.conf.js{here wdioConfigDockerImages.js} to point to 'chromedriver, docker'<br>
   **Step 4:** Configure headless chrome by adding the below to Capabilities in wdio.conf.js {here wdioConfigDockerImages.js}<br>
     *`acceptInsecureCerts: true,<br>`
       `'goog:chromeOptions': {<br>`
       `     args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless']<br>`
       `}  `* <br>
   **Step 5:** Now all you have to do it to create an image and run it by running the below commands <br>
    *`docker build -t wdioDocker:v1 .`    <br>
     `docker run wdioDocker:v1`<br>*
    
   **Note:** If you want to mount volumes, run the commands accordingly. You can refer to my video where i have explained it step by step.
