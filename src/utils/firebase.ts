// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { dispatch } from "../store";
import { navigate } from "../store/actions";
import { Screens } from "../types/navigation";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3mKNF2PTBGHEh8X4sYeFHfjnJnsZWAl8",
  authDomain: "grafik-55905.firebaseapp.com",
  projectId: "grafik-55905",
  storageBucket: "grafik-55905.appspot.com",
  messagingSenderId: "644785458287",
  appId: "1:644785458287:web:2306e93d9593f96902d19a",
  measurementId: "G-PT94J3JFDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

/*const addPost = async (post: any) => {
  try {
    const where = collection(db, "TendenciesPost")
    await addDoc(where,post)
  } catch (error) {
    console.error(error)
  }
}*/

const registerUser = async ({
  email,
  password
}: {
  email: string,
  password: string
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user);
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}

const loginUser = async ({
  email,
  password
}: {
  email: string,
  password: string
}): Promise<boolean> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user);
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}

const signOff = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error);
    
  }
}

const getPost = async () => {
  const querySnapshot = await getDocs(collection(db, "TendenciesPosts"))
  const transformed: any = []

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    transformed.push({ id: doc.id, ...data })
  })
  return transformed
}

const getPostUser = async () => {
  const querySnapshot = await getDocs(collection(db, "UploadFilesUser"))
  const transformed: any = []

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    transformed.push({ id: doc.id, ...data })
  })
  return transformed
}

const getPostDesigner = async () => {
  const querySnapshot = await getDocs(collection(db, "DesignersProjects"))
  const transformed: any = []

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    transformed.push({ id: doc.id, ...data })
  })
  return transformed
}

export const addPost = async (post: any) => {
  try {
    const where = collection(db, "UploadFilesUser")
    await addDoc(where, post)
  } catch (error) {
    console.error(error)
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    dispatch(navigate(Screens.DASHBOARD))
    
    
    // ...
  } else {
    // User is signed out
    // ...
    console.log('sign out');
    dispatch(navigate(Screens.LOGIN))
  }
});

export default {
  getPost,
  addPost,
  getPostUser,
  getPostDesigner,
  registerUser,
  loginUser,
  signOff,
}