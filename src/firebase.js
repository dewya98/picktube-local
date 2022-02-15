import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx5VPJPskkQ0I53ECaVTHNTQceTSmmSKg",
  authDomain: "picktube-d2edb.firebaseapp.com",
  projectId: "picktube-d2edb",
  storageBucket: "picktube-d2edb.appspot.com",
  messagingSenderId: "917028523671",
  appId: "1:917028523671:web:bca4e9ca4a0523b0f9a3d2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;