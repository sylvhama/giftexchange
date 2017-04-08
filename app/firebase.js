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
  firebase.auth().signInAnonymously().catch((error) => {
    const errorCode = error.code,
          errorMessage = error.message;
    console.error(errorCode, errorMessage);
    alert('An error occured, contact Mr. Smith!')
  });
};

const addParticipant = (id, name) => {
  return firebase.database().ref().child(id).push({
    name: name
  })
}

const myFirebase = {
  signInAnonymously: () => signInAnonymously(),
  addParticipant: (year, name) => addParticipant(year, name),
}

export default myFirebase;
