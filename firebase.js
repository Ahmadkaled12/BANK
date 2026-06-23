import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 👇 ضع بيانات Firebase الخاصة بك هنا
const firebaseConfig = {
  apiKey: "PUT_YOUR_KEY",
  authDomain: "PUT_YOUR_DOMAIN",
  projectId: "PUT_YOUR_ID",
  storageBucket: "PUT_YOUR_BUCKET",
  messagingSenderId: "PUT_ID",
  appId: "PUT_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
