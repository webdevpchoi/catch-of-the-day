import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9VHqD8ESpQy3CWiopYUL1TD73iRCC9Ik",
  authDomain: "catch-of-the-day-webdevpchoi.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-webdevpchoi.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
