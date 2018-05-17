import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBUa5f4GOdLXvwgMEJKLkF3uVKoCcrpBwc",
    authDomain: "expensify-database.firebaseapp.com",
    databaseURL: "https://expensify-database.firebaseio.com",
    projectId: "expensify-database",
    storageBucket: "expensify-database.appspot.com",
    messagingSenderId: "679061195733"
}

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'my first test data'
})