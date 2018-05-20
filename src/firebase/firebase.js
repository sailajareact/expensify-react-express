import * as firebase from 'firebase';
import expenses from '../selectors/expenses';

const config = {
    apiKey: "AIzaSyBUa5f4GOdLXvwgMEJKLkF3uVKoCcrpBwc",
    authDomain: "expensify-database.firebaseapp.com",
    databaseURL: "https://expensify-database.firebaseio.com",
    projectId: "expensify-database",
    storageBucket: "expensify-database.appspot.com",
    messagingSenderId: "679061195733"
}

firebase.initializeApp(config);
const database = firebase.database();

export {database, firebase};

// // with arrays
// const notes = [{
//     id: '12',
//     title: 'first note'
// }, {
//     id: '13',
//     title: 'second note'
// }]

// database.ref().once('value').then((snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({id: childSnapshot.key, 
//                         ...childSnapshot.val()})
//     });
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 2340,
//     createdAt: 12344567
// })

// database.ref('expenses').push({
//     description: 'gas bill',
//     note: '',
//     amount: 240,
//     createdAt: 12344568
// })

// database.ref('expenses').push({
//     description: 'power bill',
//     note: '',
//     amount: 40,
//     createdAt: 12344569
// })

// // database.ref().set(notes)
// database.ref().remove();
// // database.ref('notes').push({
// //     id: '14',
// //     title: 'array note'
// // })

// database.ref('notes/-LCw0-eoVxOzhQOlihSK').update({
//     subject: 'buy groceries'
// })

// // database.ref().once('value', (snapshot)=>{
// //     console.log(snapshot.val())
// // })

// firebase.database().ref().set({
//     name: 'sailaja',
//     age: 29,
//     height: 5.4,
//     location:{
//         city: 'sfo',
//         state: 'ca'
//     }
// }).then(()=>{   //promise either resolve or reject
//     console.log('data is saved')
// }).catch((e)=>{
//     console.log('this s failed', e)
// })

// // fetching data multiple time
// const onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
// })

// setTimeout(()=>{
//     database.ref('age').set(28)
// }, 4000)

// setTimeout(()=>{
//     database.ref().off()
//     // database.ref().off(onValueChange)
// }, 4000)

// setTimeout(()=>{
//     database.ref('age').set(27)
// }, 4000)


// // read/fetching data from db only one time
// database.ref().once('value').then((snapshot)=>{
//     console.log(snapshot.val())
// }).catch((e)=>{
//     console.log('unable to fech data ', e)
// })

// fetching specific value
// database.ref('location/city').once('value').then((snapshot)=>{
//     console.log(snapshot.val())
// }).catch((e)=>{
//     console.log('unable to fech data ', e)
// })



// // // it'll overrite the data after calling above call
// // firebase.database().ref().set({
// //     name: 'my first test data'
// // })

// // to edit
// database.ref('age').set(28);
// // database.ref('name').set(12);
// database.ref('location/city').set('sanjose');

// database.ref('attributes').set({
//     role: 'PA',
//     location: 'fremont'
// }).then(()=>{   //promise either resolve or reject
//     console.log('second set data is saved')
// }).catch((e)=>{
//     console.log('second set data failed', e)
// })

// // remove data
// database.ref('height').remove().then(()=>{   //promise either resolve or reject
//     console.log('removed from db')
// }).catch((e)=>{
//     console.log('unable to remove', e)
// })

// // database.ref().remove().then(()=>{   //promise either resolve or reject
// //     console.log('removed from db')
// // }).catch((e)=>{
// //     console.log('unable to remove', e)
// // })

// // update data
// database.ref().update({
//     name: 'test',
//     age: 24,
//     'location/city': 'sante'
// })

// database.ref().update({}).then(()=>{
//     console.log('removed')
// }).catch((e)=>{
//     console.log('not removed')
// });
