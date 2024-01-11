import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ9DJ1wMGNwo15BZgFvicOXqCi9bxGYZw",
  authDomain: "imoney-350ef.firebaseapp.com",
  projectId: "imoney-350ef",
  storageBucket: "imoney-350ef.appspot.com",
  messagingSenderId: "1099284545963",
  appId: "1:1099284545963:web:5368007671785636bb12ee",
  measurementId: "G-3MLNH1WSJJ",
};

const app = initializeApp(firebaseConfig);

// Sử dụng hàm getFirestore để lấy đối tượng Firestore
const fireStoreCore = getFirestore(app);

export { fireStoreCore };
