import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyB-fAu62JI9hGPO8D8Fv7-il9i_bJjwBok",
  authDomain: "fir-authentication-6757a.firebaseapp.com",
  projectId: "fir-authentication-6757a",
  storageBucket: "fir-authentication-6757a.appspot.com",
  messagingSenderId: "708953396720",
  appId: "1:708953396720:web:0acfefed147f6c7229f935",
  measurementId: "G-HT7ZK61T7J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// let btn = document.querySelector('#subtn')
// btn.addEventListener('click', ()=>{
     
//       let getemail = document.querySelector('#semail')
//       let getpassword = document.querySelector('#spass')

//      createUserWithEmailAndPassword(auth, getemail.value, getpassword.value)
// .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);  
//   })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.log('error code =>',errorCode);
//   console.log('error message =>',err);
// });
// })


let btn = document.querySelector('#sibtn')
btn.addEventListener('click',()=>{
  
  let email = document.querySelector('#lemail')
  let password = document.querySelector('#lpass')
  
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.email);  
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(error);
  });
})
