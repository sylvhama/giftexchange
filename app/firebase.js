const config = {
  apiKey: "AIzaSyA0hKs9esVQLtVbK3ChYtiuUbqMsj29URo",
  authDomain: "gift-exchange-77b1d.firebaseapp.com",
  databaseURL: "https://gift-exchange-77b1d.firebaseio.com",
  projectId: "gift-exchange-77b1d",
  storageBucket: "gift-exchange-77b1d.appspot.com",
  messagingSenderId: "73746233839"
};
firebase.initializeApp(config);

const signInAnonymously = () => {
  firebase.auth().signInAnonymously().catch(function(error) {
    const errorCode = error.code,
          errorMessage = error.message;
    console.error(errorCode, errorMessage);
    alert('An error occured, contact Mr. Smith!')
  });
};

const myFirebase = {
  signInAnonymously: () => signInAnonymously(),
}

export default myFirebase;
