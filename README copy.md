# node base mongodb

Folder structure and sample nodejs with mongodb.

Testing api with mocha and chai.

## Directory Layout

```bash
.
├── /certificates/                # Application certificates
│   ├── .crt                      # File extension for a digital certificate 
│   ├── .key                      # File is a generic extension
├── /configs/                     # Node.js application source files
│   ├── /development.json         # Configs development environment
│   ├── /i18n.config.js           # Configs localization resources(i18n)
│   ├── /oauth.config.json        # Oauth2 configs 
│   ├── /payment.config.json      # Application payment key configs
│   ├── /production.json          # Configs production environment
│   ├── /swagger.js               # Configs swagger (documnet api)
├── /coverage/                    # Testing coverage
├── /log/                         # Application log request
├── /public/                      # Public file and folder
├── /src/                         # Node.js application source files
│   ├── /api/                     # Application router file  
│   ├── /base/                    # Base class
│   │   ├── /auto_bind.js         # Auto bind this
│   │   ├── /controller.base.js   # Controller base
│   │   ├── /dao.base.js          # Data access object base
│   │   ├── /response.base.js     # Response base
│   │   ├── /service.base.js      # Service base
│   ├── /commons/                 # Application common files
│   │   ├── /consts/              # Application constants
│   │   ├── /errors/              # Application error response (Not found etc.)
│   │   ├── /responses/           # Application response (success, error)
│   ├── /connects/                # Node.js application source files
│   │   ├── /app.js               # Express.js application
│   │   ├── /mock.app.js          # Mock testing application
│   │   ├── /mongodb.connect.js   # Application connect mongodb
│   │   ├── /redis.connect.js     # Application connect redis
│   │   ├── /socket.io.connect.js # Application connect socket.io
│   │   ├── /swagger.connect.js   # Application connect swagger(document api)
│   ├── /crons/                   # Application cron job
│   ├── /libs/                    # Application custom library
│   ├── /locales/                 # Localization resources (i18n)
│   ├── /middlewares/             # Application middleware
│   ├── /schemas/                 # Schema database(mongoose)
│   ├── utils                     # Utility functions
├── index.js                      # Application
├── package.json                  # List of project dependencies
├── report.html                   # Testing report
```

For the full list of automation scripts available in this project, please refer to "scripts" section in the package.json file and the tools folder.

## Directory Layout /src/api/ 

```bash
.
├── /api/                       # Application endpoint files
│   ├── /(endpoint name)/       # Root endpoint name
│   │   ├── /specs/             # Testing specs files
│   │   ├── .controller.js      # Endpoint controller
│   │   ├── .dao.js             # Endpoint data access object
│   │   ├── .error.js           # Endpoint error message
│   │   ├── .parametters.yaml   # Endpoint document parametters
│   │   ├── .router.js          # The children endpoint of the root endpoint
│   │   ├── .service.js         # Endpoint service
│   │   ├── .validate.js        # Endpoint validate
```

## Start

```bash
yarn dev || npm run dev           # Run test and coverage source in /src
yarn start || npm run start       # Run test and coverage source in /src
```

##### API Document: [http://localhost:4000/api-docs/]

## Testing

```bash
yarn test || npm run test         # Run test and coverage source in /src
```

##### Coverage: [http://localhost:4000/coverage]

##### Report: [http://localhost:4000/report]

## Deployment

[See deployment](https://gitlab.com/phuongtu/node-base-mongodb/blob/master/deployment.md)

## Reference Articles and Tutorials

* [Stop using JWT for sessions](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/)
  ([Part 2](http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/))
  by [Sven Slootweg](https://github.com/joepie91)
* [How to Safely Store Your Users' Passwords](https://paragonie.com/blog/2016/02/how-safely-store-password-in-2016)
  by [P.I.E.](https://paragonie.com/)
* [How to set up Node.js API Starter on Windows 10](https://medium.com/@daveyedwards/how-to-setup-kriasofts-nodejs-api-starter-on-windows-10-a092d6e34882)
  ([video](https://youtu.be/IV4IsYyfdKI)) by [Davey Edwards](https://twitter.com/daveyedwards)
* [How to call C/C++ code from Node.js](https://medium.com/@tarkus/how-to-call-c-c-code-from-node-js-86a773033892)
  by [Konstantin Tarkus](https://twitter.com/koistya)
* [How to implement swagger](https://medium.com/@akilaaroshana/design-apis-easier-than-ever-with-swagger-2-0-60a2ba696d7d)
* [Swagger editor](https://editor.swagger.io/)
* [Swagger document](https://swagger.io/docs/specification/2-0/basic-structure/)
* [Data access object pattern (DAO)](https://www.tutorialspoint.com/design_pattern/data_access_object_pattern.htm)
* [What is REST FULL API](https://restfulapi.net/)
* [HTTP Status Code](https://www.restapitutorial.com/httpstatuscodes.html)
  
## License

MIT
