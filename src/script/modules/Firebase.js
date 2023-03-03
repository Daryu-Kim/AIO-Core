// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "vue3-toastify";
import router from "@/router";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQoqm4AgJaRMV2CP4xZjpONPh4eC1fxCo",
  authDomain: "aio-core.firebaseapp.com",
  databaseURL:
    "https://aio-core-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aio-core",
  storageBucket: "aio-core.appspot.com",
  messagingSenderId: "539032638494",
  appId: "1:539032638494:web:50d2c3f2f751cf03b6ca0f",
  measurementId: "G-GYZLMQR0QW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export function registerWithEmail(email, password, name, phone) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("uid", user.uid);

      await setDoc(doc(db, "Users", user.uid), {
        phone: phone,
        name: name,
        uid: user.uid,
      });
      router.push("/developer");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(`${errorCode}: ${errorMessage}`, {
        autoClose: 3000,
        theme: "colored",
      });
    });
}

export function loginWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("uid", user.uid);
      router.push("/developer");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(`${errorCode}: ${errorMessage}`, {
        autoClose: 3000,
        theme: "colored",
      });
    });
}

// export async function getAppData(doc_id) {
//   const docSnap = await getDoc(doc(db, "Apps", doc_id));

//   if (docSnap.exists()) {
//     console.log("Document Read Complete!");
//     localStorage.setItem("APP_DOC_TEMP", docSnap.data());
//     return docSnap.data();
//   } else {
//     console.log("No Such Document!");
//     return null;
//   }
// }

// export function getAppList() {
//   const filter = query(collection(db, "Apps"), limit(45), orderBy("download"));
//   const document = getDocs(filter);
//   return document;
// }
