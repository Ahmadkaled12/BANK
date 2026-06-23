import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore, setDoc, doc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PUT_KEY",
  authDomain: "PUT_DOMAIN",
  projectId: "PUT_ID",
  storageBucket: "PUT_BUCKET",
  messagingSenderId: "PUT_ID",
  appId: "PUT_APP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔐 تسجيل حساب
window.registerUser = async function(email, password){
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db,"users",user.user.uid),{
    email: email,
    balance: 0,
    role: "user"
  });

  alert("تم إنشاء الحساب");
  window.location.href = "login.html";
}

// 🔐 تسجيل دخول
window.loginUser = async function(email, password){
  const user = await signInWithEmailAndPassword(auth,email,password);
  localStorage.setItem("uid", user.user.uid);
  window.location.href = "dashboard.html";
}
