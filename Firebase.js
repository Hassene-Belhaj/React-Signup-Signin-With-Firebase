import { initializeApp  } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey:import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain:import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId:import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket:import.meta.env.VITE_REACT_APP_STORAGEBOCKET,
  messagingSenderId:import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const Provider = new GoogleAuthProvider()



