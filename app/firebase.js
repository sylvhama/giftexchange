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

const resetList = (id) => firebase.database().ref(`${id}`).set(null);

const listenToChanges = (id, callback) => {
  const idRef = firebase.database().ref(id);
  idRef.on('value', (snapshot) => callback(snapshot));
};

const getList = (id) => firebase.database().ref(id).once('value');

const myFirebase = {
  signInAnonymously: () => signInAnonymously(),
  addParticipant: (id, person) => addParticipant(id, person),
  updateParticipant: (id, key, person) => updateParticipant(id, key, person),
  resetList: (id) => resetList(id),
  listenToChanges: (id, callback) => listenToChanges(id, callback),
  getList: (id) => getList(id),
}

export default myFirebase;
