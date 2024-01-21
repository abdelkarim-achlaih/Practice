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

Firestore => collections => documents => key-value pairs

---------------  */

import { initializeApp } from "firebase/app";

/* --------------- initializeApp

from V9, Import only functions--methods that we need from the firebase object that lives in the core part
of firebase Lib (firebase/app), this object contains a lot of different methods that we would use to
basically connect to firebase and initialize different services

---------------  */

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
const app = initializeApp(firebaseConfig);
