<p align="center">
  <a href="https://github.com/syncrolaze" target="blank"><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zxze9uxu87dgmnhmrudq.png" width="320" alt="Project Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Build for the Future</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
</p> 

## Description

<!-- To be added -->

This is a academic website with some awesome features, which is been powered by Django and NextJS.

<!-- ## Built With - To be added -->


## Things needed

Our whole project is been dockerized, which makes the local-development setup ease.

- [Install Docker engine](https://docs.docker.com/engine/install/)
- Ask the maintainer for **dev kit**, which contains **.env** and other necessary files.

## Getting Started

These are the instructions on setting up our project locally. To get a local copy up and running follow these steps.

### Installation

1. We recommend you fork the repo on GitHub, then clone your fork:

```bash
$ git clone https://github.com/<USERNAME>/aquila.git Aquilla --recursive
```


2. You can then add the Aquila repo to sync with upstream changes:

```bash
$ git remote add <remote-name> https://github.com/syncrolaze/aquila.git
```

3. Start the Docker and make sure that the docker-engine is running

```bash
$ docker info
```

> Using this command check whether the docker engine is running!

4. Navigate inside the project directory, make sure the directory is proper before moving further, it should be `Aquilla/`  

```bash
$ cd Aquilla
```

5. From here, build the docker-images

```bash
$ docker-compose build
```

> This may take some time to complete 🧭

6. Once the docker-images are built

```bash
$ docker compose up
```

> You may see the logs that are running up in the terminal, now the container has been started.

7. Both [backend](./backend) & [webapp](./webapp) has separate commands that needs to be excuted before running the app, do check out those before proceeding further.

**Pro tip: Always start with the backend commands so that front-end doesn't shot any error.**

### Running the app

- Starting the app

```bash
$ docker compose up
```

- Stopping the container

```bash
$ docker compose stop
```

- Stop & remove all containers

```bash
$ docker compose down
```

### Navigations

- Webapp - [http://localhost/](http://localhost/)
- GraphiQL - [http://localhost/api/graphql](http://localhost/api/graphql)
- Backend - [http://localhost/api/admin](http://localhost/api/admin)

**Note: Our project is been served using nginix and gunicorn, so accessing the respective part using the portnumber may not be working properly.**

## Roadmap

See the [open issues](https://github.com/syncrolaze/aquila/issues) for a list of proposed features (and known issues).

## Support

Aquila is an  Apache-licensed open-source project. It can grow thanks to the contributors and support by the amazing backers 🤩

<!-- ## Authors - TODO-->


## License

This project is currently licensed under the **[GNU GPLv3](LICENSE)**.  

Copyright 2021 Syncrolaze