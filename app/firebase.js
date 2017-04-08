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
  return firebase.auth().signInAnonymously().catch((error) => {
    const errorCode = error.code,
          errorMessage = error.message;
    console.error(errorCode, errorMessage);
    alert('An error occured, contact Mr. Smith!')
  });
};

const addParticipant = (id, person) => firebase.database().ref().child(id).push(person);

const updateParticipant = (id, key, person) => firebase.database().ref(`${id}/${key}`).set(person);

const listenToChanges = (callback) => {
  const today = new Date(),
        year = today.getFullYear(),
        yearRef = firebase.database().ref(year);
  yearRef.on('value', (snapshot) => callback(snapshot));
};

const myFirebase = {
  signInAnonymously: () => signInAnonymously(),
  addParticipant: (year, name) => addParticipant(year, name),
  updateParticipant: (id, key, person) => updateParticipant(id, key, person),
  listenToChanges: (callback) => listenToChanges(callback),
}

export default myFirebase;
