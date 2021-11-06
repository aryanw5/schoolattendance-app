import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAxvzc4jGECaXVqyTLjVzzj_J4ytx9ggrU",
  authDomain: "school-attendance-4a9f6.firebaseapp.com",
  databaseURL: "https://school-attendance-4a9f6-default-rtdb.firebaseio.com",
  projectId: "school-attendance-4a9f6",
  storageBucket: "school-attendance-4a9f6.appspot.com",
  messagingSenderId: "410003964949",
  appId: "1:410003964949:web:37ce9825cd0ebb64a57a1c"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database()
 

  