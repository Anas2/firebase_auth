// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVpAI-jh2QES25hyZvAu1vrX7ILhqT5zo",
  authDomain: "anas-f5775.firebaseapp.com",
  databaseURL: "https://anas-f5775.firebaseio.com",
  projectId: "anas-f5775",
  storageBucket: "anas-f5775.appspot.com",
  messagingSenderId: "861907538096",
  appId: "1:861907538096:web:3b46e6ef8a0b4fc6b9ab75",
  measurementId: "G-RP65S58B7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function (e) {
  e.preventDefault();
  var obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    console.log(success.user.uid)
  })
  .catch(function(err){
    console.log(err)
  });

  console.log(obj);
};
