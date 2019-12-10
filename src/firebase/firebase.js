import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }; 

// database.ref('expenses')
// 		.on('child_removed', (snapshot) =>
// 		{
// 			console.log(snapshot.key, snapshot.val());
// 		});

// database.ref('expenses')
// 		.on('child_changed', (snapshot) =>
// 		{
// 			console.log(snapshot.key, snapshot.val());
// 		});	
// database.ref('expenses')
// 		.on('value', (snapshot) =>
// 		{
// 			const expenses = [];
// 			snapshot.forEach((childSnapshot) =>
// 			{
// 				expenses.push(
// 				{
// 					id: childSnapshot.key,
// 					...childSnapshot.val()
// 				});
// 			});
// 			console.log(expenses);
// 		});

// database.ref('expenses')
// 		.once('value')
// 		.then((snapshot) =>
// 		{
// 			const expenses = [];
// 			snapshot.forEach((childSnapshot) =>
// 			{
// 				expenses.push(
// 				{
// 					id: childSnapshot.key,
// 					...childSnapshot.val()
// 				});
// 			});
// 			console.log(expenses);
// 		});

// database.ref('expenses').push(
// {
// 	description: 'Shoes',
// 	amount: 100,
// 	note: 'nike',
// 	createdAt: 0
// });
// database.ref('expenses').push(
// {
// 	description: 'Shirt',
// 	amount: 200,
// 	note: 'Tommy',
// 	createdAt: 0
// });
// database.ref('expenses').push(
// {
// 	description: 'Gloves',
// 	amount: 50,
// 	note: 'leather',
// 	createdAt: 0
// });
	
// database.ref().on('value', snapshot => 
// {
// 	const value = snapshot.val();
// 	console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// })

// const onValueChange = database.ref().on('value', 
// 	snapshot => console.log(snapshot.val()), 
// 	error => console.log(error));


// setTimeout(() =>
// {
// 	database.ref('age').set('28');
// }, 3500);

// setTimeout(() =>
// {
// 	database.ref().off(onValueChange);
// }, 7000);


// setTimeout(() =>
// {
// 	database.ref('age').set('30');
// }, 10500);
// database.ref('location/city').once('value')
// 			  .then(snapshot => console.log(snapshot.val()));

// database.ref().set(
// {
//     name: 'David',
//     age: 23,
//     isSingle: true,
//     stressLevel: 6,
//     job: 
//     {
//         title: 'Software programmer',
//         company: 'Google'
//     },
//     location: 
//     {
//       city: 'Grudziadz',
//       country: 'Poland'
//     }
// }).then(() => console.log('Data is saved!'))
//   .catch(e => console.log('Error', e));

// database.ref('location/country')
//         .set('Polska')
//         .then(() => console.log('Data is saved!'))
//         .catch(e => console.log('Error', e));

// database.ref('attributes')
//         .set(
//         {
//             height: 196,
//             weight: 80
//         })
//         .then(() => console.log('Data is saved!'))
//         .catch(e => console.log('Error', e));

// database.ref('isSingle')
//         .set(null);

// database.ref()
//         .update(
//         {
//             'job/company': 'Amazon',
//             'location/city': 'Gdansk',
//             stressLevel: 9
//         })
//         .then(() => console.log('Updated'))
//         .catch(e => console.log(e))
    
// database.ref()
//         .update(
//         {
//             job: 'Journalist',
//             'location/city': 'Gdansk',
//             stressLevel: 5
//         })
//         .then(() => console.log('Updated'))
//         .catch(e => console.log(e));

// database.ref('isSingle')
//         .remove()
//         .then(() => console.log('Data is removed!'))
//         .catch(e => console.log('Error', e));