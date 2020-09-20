# enrollee-app

/backend folder- has the backend deno microservices , enrolleee related

/ui folder - contains angular app to update enrollee information.

Instructions to run backend -

# deno run --allow-net server.ts

Default Services will be available in "http://localhost:8081/" 

# Instructions to run FrontEnd -


go to ui/enrollees - run "npm install"

Dev mode : npm run start

# Set the BackEnd Api Endpoint Url in the Angular App(!!!IMPORTANT!!!) #
Note : If you are running the backend service in different port other than , please change the url in Config file


/ui/enrollees/src/app/core/config.ts - "baseApiUrl"  to new url.

# Prod mode
Prod : npm run prod 

