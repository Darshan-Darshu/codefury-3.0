import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA33ccIW8XDh0aqNiu6iKpfD1AmnK3rF4c",
	authDomain: "codefury-3.firebaseapp.com",
	databaseURL: "https://codefury-3.firebaseio.com",
	projectId: "codefury-3",
	storageBucket: "codefury-3.appspot.com",
	messagingSenderId: "879425921027",
	appId: "1:879425921027:web:2338a3cd13e1d8f0142e36",
	measurementId: "G-19S6EJF0W1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
