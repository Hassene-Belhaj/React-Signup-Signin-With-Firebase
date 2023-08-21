import { initializeApp  } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCSBbmCiLyZznmi1zYVjRp8kFg8KGRLu_A",
  authDomain: "signin-bcc02.firebaseapp.com",
  projectId: "signin-bcc02",
  storageBucket: "signin-bcc02.appspot.com",
  messagingSenderId: "351925243536",
  appId: "1:351925243536:web:915fd68885acbdc01fd215"
  // apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  // authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_REACT_APP_STORAGEBOCKET,
  // messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID ,
  // appId: import.meta.env.VITE_REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const Provider = new GoogleAuthProvider()



