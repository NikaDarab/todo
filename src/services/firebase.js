import firebase from "firebase";
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCvxnlVq0DmWu9Z3rHdwH5kNSxwzfv3nMM",
  authDomain: "blueroof-todo.firebaseapp.com",
  projectId: "blueroof-todo",
  storageBucket: "blueroof-todo.appspot.com",
  messagingSenderId: "284476566906",
  appId: "1:284476566906:web:f9bed555dfafad24c3fac3",
  measurementId: "G-MQ3SP102ZT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

export const fbCreateAccount = async (email, password) => {
  return new Promise(function (resolve, reject) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        resolve(userCredential.user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  });
};

export const fbLogin = async (email, password) => {
  return new Promise(function (resolve, reject) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        resolve(userCredential.user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  });
};

export const fbLogout = async () => {
  return new Promise(function (resolve, reject) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  });
};

export const fbAddTask = async (task) => {
  return new Promise(function (resolve, reject) {
    db.collection("tasks")
      .add(task)
      .then((docRef) => {
        resolve(docRef.id);
      });
  });
};

export const fbUpdateTask = async (task) => {
  return new Promise(function (resolve, reject) {
    db.collection("tasks")
      .doc(task.id)
      .set(task.task)
      .then(() => {
        resolve();
      });
  });
};

export const fbGetTasks = async (userID) => {
  return new Promise(function (resolve, reject) {
    db.collection("tasks")
      .where("uid", "==", userID)
      .get()
      .then((querySnapshot) => {
        let collection = [];
        querySnapshot.forEach((doc) => {
          collection.push({ id: doc.id, task: doc.data() });
        });
        resolve(collection);
      });
  });
};
