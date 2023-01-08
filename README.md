# Serve microfrontends
 - Angular cli 14.1.3
 - Node 18.12.1
 - npm 8.19.2
 - commands:
    - ng serve fuse -o --host=127.0.0.1
    - ng serve auth-mfe -o --host=127.0.0.1

# Firebase deploy
This project is deployed and hosted in my personal firebase account.
I've created a new Project called MyPortfolioV2 and inside I've created two sites: auth-mfe and fuse
I've followed this guide to accomplish this configuration: https://fireship.io/lessons/deploy-multiple-sites-to-firebase-hosting/
To define the host Targets I've used these two commands in a terminal inside the project root:
 - firebase target:apply hosting  auth auth-mfe
 - firebase target:apply hosting  fuse fuse

The first thing to do is build the microservices and the libraries. So the commands to use will be:

 - ng build [auth-lib, common-lib, fuse-lib, translation-lib] *-->for libraries*
 - ng build [auth-mfe, fuse] *--> for microservices*

After we created the build in the dist folder we can go on and deploy everything to firebase.
To deploy all the microservices (whith the needed libraries):

 - firebase deploy --only hosting

To deploy only a particolar microservice (with the needed libraries):

 - firease deploy --only hosting:auth-mfe (or fuse)
