## Running it

You'll need [docker](https://store.docker.com/editions/community/docker-ce-desktop-mac) installed, then do `docker-compose up` to start the app. It'll be on [localhost:3000](http://localhost:3000)

Its a todolist app - go to /<some_user_id> to see the todos for that user

## Cypress tests

to run the cypress tests from inside the running docker container, do this:

`docker-compose exec app npm run regression`

to open the cypress console thing, youll need to have the dependencies installed outside of docker - so

`npm i`

then

`npm run cypress`
