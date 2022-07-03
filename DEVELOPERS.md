# Developing Aquila

- [Development Setup](##Development-Setup)
- [Installing Dependencies](###Installing-Dependencies)
- [Building Aquila](##Building-Aquila)
- [Start a Development Server](##Start-a-Development-Server)
- [What's Next?](##What's-Next)

## Development Setup

This document describes how to set up your development environment to build and test Aquila.

### Installing Dependencies

Before you can build Aquila, you must install and configure the following dependencies on your machine:

- [Git](https://git-scm.com/downloads)
- [Docker engine](https://docs.docker.com/engine/install/)

### Forking Aquila on Github

To contribute code to Aquila, you must fork the [Aquila Repository](https://gitlab.com/syncrolaze/aquila) in GitLab. After you fork the repository, you may now begin editing the source code.

## Building Aquila

To build Aquila, you clone the source code repository:

1. Clone your Github forked repository:

   ```sh
   git clone https://gitlab.com/<gitlab_username>/aquila.git
   ```

2. Go to the Aquila directory:

   ```sh
   cd aquila
   ```

3. You can then add the Aquila repository to sync with upstream changes:

   ```sh
   $ git remote add <remote-name> https://gitlab.com/syncrolaze/aquila.git
   ```

4. Build Aquila:

   ```sh
   docker compose build
   ```

5. To migrate the database, you can run the following command:

   ```sh
   docker-compose run backend python manage.py migrate
   ```

6. Create superuser:
   ```sh
   docker-compose run backend python manage.py createsuperuser
   ```

### Choosing Directory

Before you start a development server, you must choose if you want to work on the Aquila Backend or Frontend.

- Go to the [Aquila Backend](https://gitlab.com/syncrolaze/aquila/-/tree/main/backend) directory
  ```sh
  cd backend
  ```
  Go to the [Aquila Frontend](https://gitlab.com/syncrolaze/aquila/-/tree/main/webapp) directory
  ```sh
  cd webapp
  ```

## Start a Development Server

To debug code, and to see changes in real time, it is often useful to have a local HTTP server. Since our whole project is dockerized, we can use the Docker Compose tool to start a development server.

1. Start the development server:

   ```sh
   docker-compose up -d
   ```

   > Before starting the server, you must start the docker engine

2. The project is been served using nginix and gunicorn, so accessing the respective parts is even more easy. Open your browser and navigate to:

   ```sh
   # Backend
   http://localhost/api/admin

   # GraphiQL Playground
   http://localhost/api/graphiql

   # Frontend
   http://localhost/
   ```

3. To stop the development server, run:
   ```sh
   docker-compose down
   ```

### Installing Packages/Libraries

When we are developing, we often need to install libraries and packages. We can do this by using these commands:

```sh
# Backend
docker-compose run backend pip install <package>

# Frontend
docker-compose run backend npm install <package>
```

## What's Next?

Make your changes to the file(s) you'd like to update.

### Open a Merge request

When you're done making changes and you'd like to propose them for review by opening a merge request.

### Submit your PR & get it reviewed

- Once you submit your MR, others from the team will review it with you. The first thing you're going to want to do is a self review.
- After that, we may have questions, check back on your MR to keep up with the conversation.
- Did you have an issue, like a merge conflict? Check out GitHub's git tutorial on how to resolve merge conflicts and other issues.

### Your MR is merged!

Congratulations! you made your first MR, thank you 🙏🏼

### Why the initial commits in the repository are not proper?

Initially we made Aquila in a multi repository architecture, but later we decided to make it in a single repository. This is because we want to make sure that the code is clean and well organized.

We follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines to make sure that the code is well organized.
