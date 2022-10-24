import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB66KOyHY8rL1ZVyDNmfP71PK6qctb4mPw",
  authDomain: "ema-john-practice-728c6.firebaseapp.com",
  projectId: "ema-john-practice-728c6",
  storageBucket: "ema-john-practice-728c6.appspot.com",
  messagingSenderId: "875583655532",
  appId: "1:875583655532:web:ca1a653456d7dbac221249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;