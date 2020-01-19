# MERN-JWT Boilerplate

This application is intended as a starter for MERN applications. The tools used include Create React App, JWT, and Passport.

## Setup and requirements

Requires NodeJS v12+ be installed. Add `.env` file with `SECRET=secretkey`. This value is used for signing JSON Web Tokens used for authentication.

## Devlopment

This project uses [Create React App](https://create-react-app.dev/) for a client development server and build process. Run `npm start` from the root directory of the project to stare the backend server and client development server.

## Deploying to Heroku

Use Heroku CLI or link Heroku app to GitHub repo to deploy. Requires MongoDB connection URI as Heroku config var named `MONGODB_URI`. (Heorku creates this automatically the MLab addon is provisioned.) Add `SECRET` to Heroku app config vars. (https://devcenter.heroku.com/articles/config-vars)

## Authentication

Authentication using JWT is included in this boilerplate. [Passport](http://www.passportjs.org/) is used for protected routes on the backend. [node-jsonwebtoken](node-jsonwebtoken) is used to issue JSON Web Tokens (JWT).

The following routes are provided for auth:

- Create a new user account: `POST /api/users`. This route expects raw json content. Example request body: `{ "email": "test@user.com", "password": "secret123456" }`

- Login: `POST /auth/login`. This route expects raw json content. Example request body: `{ "email": "test@user.com", "password": "secret123456" }`

- See `GET /api/users/:id` for an example of a protected backend route using Passport. The route is protected by importing the `authenticate` method from [server/config/passport.js](./server/config/passport.js). This method returns verification middleware. Incoming requests must have an Authorization header. (e.g. `Authorization: Bearer <token>`) The middleware may be used to protect any routes from unauthorized access.

Passwords are encrypted before storing them in the database using [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme). Configure password encryption and vefication by modifying the [`User` model](./server/models/User.js).

The client includes a starter auth and account creation flow using the ContextAPI and hooks. Use the provided components or create a custom auth flow using these for reference. Components needing access to user data and the auth state may access this data via a `useAuth` custom hook found in [client/src/utils/auth/index.js](./client/src/utils/auth/index.js). The hook provides values for the auth state and methods for handling login, logout, and signup.

## Client Side Routing

Initial client side routes include `/`, `/login`, and `/signup`. Modify these pages or use them as a reference when creating custom routes and components.

[React Router](https://reacttraining.com/react-router/web/guides/quick-start) is used to configure the routing. All initial routing is rendered in [`App.js`](./client/src/App.js).

## Tools

### Code Formatting

This application uses Prettier for code formatting. If you are using VSCode, you
can install the extension to easily format code.

Code is formatted automatically every time `git add` is run as a pre-commit
hook. This is accomplisehd with husky and lint-staged. See
[Formatting Code Automatically](https://create-react-app.dev/docs/setting-up-your-editor#formatting-code-automatically)
in the Create React App docs.
