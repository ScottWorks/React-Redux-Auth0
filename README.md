## Motivation

This is an app that practices concepts from Redux, and Auth0. You will notice that to documentation is scarce as there is an assumed level of knowledge in these areas already. I will try to write notes on each of the technologies incorporated but please keep in mind that this was not meant to be an extensive tutorial. This tutorial follows closely with the Todo List example provided in the [Redux documentation](https://redux.js.org/basics/usagewithreact).

## Introduction

This application will allow users to create a friends list with with calls made to the [Random User API](https://randomuser.me/) via an Express server. The server is only being used to implement restricted API calls with Auth0. React will simply display the user data and provide the following basic features:

- [ ] Filter by gender, and state (redux)
- [ ] Remove friends from list (redux)
- [ ] Add friends to list (redux)
- [ ] Signup as a new user (auth0)
- [ ] Login to user account (auth0)

## Redux

Redux will manage the global state of our application via the store.js file.

### Actions

Actions are simply "payloads of information" that send data from the app to the redux store. These are sent to the store via `store.dispatch()` if you are following the basic Redux pattern.

### Action Creators

Action Creators are pure functions that return actions.

### Reducers

### Store

### File Structure

/Components ...functional components that pass props to their view counterpart.

/Views ...display components that render based on props which are passed down to them.

#### Views

- ListContainer ...displays potential friends
  - `users` ...array of users with shape of `{id, user_data, isFriend}`
  - `onUserClick(id: number)` ...callback to invoke when user is clicked
- FriendsContainer ...displays friends
  - `friends` ...array of friends with shape of `{id, user_data, isFriend}`
  - `onUserClick(id: number)` ...callback to invoke when user is clicked
- Person ...a person that is displayed in either the user or friend lists.
  - `user_data: Object` ...data that will be displayed
  - `isFriend: Boolean` ...disables add friend button in User List if true.
- FilterLink ...a link with a callback
  - `onClick()` ...is a callback to invoke when the link is clicked.

#### Components

- FriendList ...displays users based on current filter, renders FriendList
- PersonList ...displays users based on current filter, renders PersonList
- FilterSelection ...gets current filter and renders a Link
  - `filter: string` ...current state of the filter
