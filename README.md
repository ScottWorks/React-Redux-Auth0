## Motivation

This is an app that practices concepts from Redux, and Auth0. You will notice that to documentation is scarce as there is an assumed level of knowledge in these areas already. I will try to write notes on each of the technologies incorporated but please keep in mind that this was not meant to be an extensive tutorial.

## Introduction

This application will pull random user data from the [Random User API](https://randomuser.me/). React will simply display the user data and provide the following basic features:

- [ ] Sort by username (redux)
- [ ] Filter by gender, and state (redux)
- [ ] Remove users from list (redux)
- [ ] Add users to list (redux)
- [ ] Signup as a new user (auth0)
- [ ] Login to user account (auth0)

## Redux

Redux will manage the global state of our basic application.

### Actions

Actions are simply "payloads of information" that send data from the app to the redux store. These are sent to the store via `store.dispatch()` if you are following the basic Redux pattern.

### Action Creators

### Reducers

### Store
