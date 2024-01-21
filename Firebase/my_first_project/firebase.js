/* --------------- What is Firebase

Firebase is a Backend as a service, it's a platform provided by Google, it provides these services:

--authentication
--real-time database
--Cloud Firestore
--cloud storage
--hosting
--cloud functions
--Cloud Messaging (FCM)
--Performance Monitoring
--Remote Config

---------------  */

/* --------------- What is Firestore

Firestore is designed to store, sync, and query data for web and mobile applications.
Firestore is a serverless, scalable, and cloud-hosted database that allows developers to build 
applications without worrying about the infrastructure management. It's features:

--NoSQL Document Database: JSON-like documents
--Collections and Documents: Firestore organizes data into collections: containers for documents
Each document is a set of key-value pairs, and documents within a collection can have different fields.

Firestore
=> collections: collection(db, "books")
=> documents: getDocs(colRef).then((snapshot) => snapshot.docs)
=> key-value pairs: call data() on each doc a.k.a each element of snapshot.docs

---------------  */

import { initializeApp } from "firebase/app";

/* --------------- initializeApp

from V9, Import only functions--methods that we need from the firebase object that lives in the core part
of firebase Lib (firebase/app), this object contains a lot of different methods that we would use to
basically connect to firebase and initialize different services

---------------  */

import {
	getFirestore, // this kind of functions: get***, are used to initialize a service, to init all we nedd to call getAll
	collection, // ref to a specific collection in our database (database, CollectionName)
	getDocs,
	addDoc, // (colRef, Object to add)
	doc, // ref to a specific doc in our collection (database, CollectionName, doc id)
	deleteDoc, // (docRef)
	onSnapshot, // Realtime listener (colRef, CalbackFnc): CalbackFnc runs when init + everytime there is a change in colRef
	query,
	where,
	orderBy,
	serverTimestamp, // Creates a timestamp, use it instead of Time()
	getDoc,
	updateDoc,
} from "firebase/firestore"; // The service we're using

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCCYIu5HZoobTWJkiIMa6YvSFg_XSpOtG4",
	authDomain: "industrial-net-393400.firebaseapp.com",
	projectId: "industrial-net-393400",
	storageBucket: "industrial-net-393400.appspot.com",
	messagingSenderId: "136973868948",
	appId: "1:136973868948:web:15537d3fe535145fb3f981",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig); // Initialize Firebase App based on the Firebase configuration object

// Initialize services: Firestore service for this project
const db = getFirestore(); // Database

// Get collection ref
const colRef = collection(db, "books"); // ref to a specific collection in our database (database, CollectionName)

// Get collection data: just runs once
// getDocs(colRef) //Return a Promise that will resolves on the docs that contains the collection
// 	.then((snapshot) => {
// 		let books = [];
// 		snapshot.docs.forEach((doc) => {
// 			// get All docs of the firestore collection
// 			books.push({ ...doc.data(), id: doc.id });
// 		});
// 		console.log(books);
// 	});

// Queries
const q = query(colRef, orderBy("createdAt"));

// Realtime collection data: runs on init + everytime there is a change in colRef

// onSnapshot(colRef, (snapshot) => { // Pass colRef if we want to get all docs in that collection, also pass docRef to listen to changes on this doc
onSnapshot(q, (snapshot) => {
	// Pass q if we want to get all records based on a query filter
	let books = [];
	snapshot.docs.forEach((doc) => {
		// get All docs of the firestore collection
		books.push({ ...doc.data(), id: doc.id });
	});
	console.log(books);
});

//Adding a new doc
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	addDoc(colRef, {
		title: addBookForm.title.value,
		author: addBookForm.author.value,
		createdAt: serverTimestamp(),
	}).then((_) => addBookForm.reset());
});

//Deleting a specific doc
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const docRef = doc(db, "books", deleteBookForm.id.value);
	deleteDoc(docRef).then((_) => deleteBookForm.reset());
});

//Get a single document
const docRef = doc(db, "books", "Z3PrggKkZZNk0meRcfvx");
getDoc(docRef).then((doc) => console.log(doc.data(), doc.id));

//Updating a specific doc
const updateBookForm = document.querySelector(".update");
updateBookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const docRef = doc(db, "books", updateBookForm.id.value);
	updateDoc(docRef, {
		title: "updated",
	}).then((_) => updateBookForm.reset());
});
