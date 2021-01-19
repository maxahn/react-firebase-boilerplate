# React Firebase Boilerplate

## Introduction

This is a boilerplate set up (in progress) for React and Firebase to get the basic app functionality ready to go so I can hit the ground running whenever I start up a new project. Feel free to use it and give feedback.

## Features

- User Authentication and instantiation in Firebase upon sign up

## Setup 

### 1. Install package dependencies

This boilerplate uses yarn as its package manager so run `yarn install` to install its dependencies.

### 2. Set up Firebase credentials

This project uses an .env file to store credentials. Create an .env file at the root of your project and copy and paste the following into it.

Then, go create a Firebase project at the [firebase console](https://console.firebase.google.com/), get the credentials and replace the placeholder values below.

**NOTE: Just storing your credentials in the .env aren't what will keep your Firebase app secure; they are still accessible in the public/ folder after the app is built. Instead, you'll have to rely on writing good Firestore Security Rules for you database. More on this later.**

```
REACT_APP_API_KEY=XXXXxxxx
REACT_APP_AUTH_DOMAIN=xxxxXXXX.firebaseapp.com
REACT_APP_DATABASE_URL=https://xxxXXXX.firebaseio.com
REACT_APP_PROJECT_ID=xxxxXXXX
REACT_APP_STORAGE_BUCKET=xxxxXXXX.appspot.com
REACT_APP_MESSAGING_SENDER_ID=xxxxXXXX
```

### 3. Set up Realtime Firebase

This app uses Firebase's realtime database to create and store users. Intialize the database through the firebase console.
