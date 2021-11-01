# Triforce

This will be an application made to connect with the [Trio API](https://share.trio.com.br/home).

## Features

* Mock connection with the Trio API through the sandbox environment.
* Client-side that can:
  - list all available institutions
  - select the desired institution and collect bank credentials
  - list all accounts linked with credentials;
  - list all the transactions linked with account.

## Client-side technologies

* **Figma** for a simple visual wireframe before going into coding.
* **Typescript** as a main language to typecast certain sensitive so all ends are tied.
* **React** using .tsx for the front-end as a quick, easy way to deploy it to the cloud whilst using Typescript.
* **React Router** to make a log-in page before entering into the application per se.
* **Material UI** for interesting elements that can better improve UX.

## Server-side Technologies

* **NodeJS** for the back-end as a development environment.
* **Express** as a framework that can speed up development.
* **Typescript** for better scalability with the client-side.
* **MongoDB** for non-relational database querying and simple JSON document storage.
* **Mongoose** as a facilitator to Mongo.
* **API** npm module to facilitate requests with authorization methods.x

## Develop and Deploy Technologies

* **ESLint** for code formatting.
* **Mocha** as a prettifier for the very-much-useful native **Assert** test module from NodeJS. This will be used for **unit and integration** tests.
* **Docker** to facilitate deployment to the cloud without dependency problems.
* **AWS Fargate or ECS** (will decide) for deployment with a tiny backload.

## Development Steps

* [X] Understand how the Trio API responds to mock data
* [X] Create wireframe for apps
* [X] Draw front-end system
* [X] Draw back-end system
* [X] Draw database system
* [X] Draw out Docker-Compose wireframe
* [X] Figma wireframe
* [X] Test API request
* [X] Test API access
* [ ] Test if data is saved in the database
* [ ] Test if data is sent to the front-end
* [X] Server
  * [X] Figure out how to do cURL or fetch requests in the back-end
  * [X] App
  * [X] Router
  * [X] Controller
  * [X] Schemas
  * [X] Database connection
  * [X] Write out npm scripts
  * Build image
* [ ] Client
  * [X] Simple design
  * [ ] HTML & CSS
  * [ ] Components
  * [ ] Write out npm scripts
  * [ ] Build image
* [X] Configure Docker-Compose image
* [ ] Deploy to AWS Fargate cluster(?)

## Creation period

* [Figma Project](https://www.figma.com/file/mEX8yGYT9r1HGyJmavg1pF/Untitled?node-id=5%3A172)
