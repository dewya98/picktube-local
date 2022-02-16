import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "yours",
  authDomain: "yours",
  projectId: "yours",
  storageBucket: "yours",
  messagingSenderId: "yours",
  appId: "yours"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
