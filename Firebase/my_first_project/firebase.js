// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

/* ---------------
from V9, Import only functions--methods that we need from the firebase object that live in core part of firebase Lib, 
this object contains a lot of different methods that we would use to basically connect to firebase and initialize 
different services 
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
