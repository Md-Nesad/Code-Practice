import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtQRjjW37Ynx_u6ADIIh3shU8ZxVa5mPM",
  authDomain: "practice-web-app-42e9a.firebaseapp.com",
  projectId: "practice-web-app-42e9a",
  storageBucket: "practice-web-app-42e9a.appspot.com",
  messagingSenderId: "411274067768",
  appId: "1:411274067768:web:ebd52f3d9b76c88a4f8bcd",
  databaseURL: "https://practice-web-app-42e9a-default-rtdb.firebaseio.com/",
};
export const firebaseApp = initializeApp(firebaseConfig);

import { firebaseApp } from "./context/Firebase";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default function App() {
  const putData = async () => {
    await addDoc(collection(db, "details"), {
      name: "Nesad",
      age: 24,
      relation: "Sonia",
    });
  };
  // collection in collection
  const putSubData = async () => {
    await addDoc(collection(db, "details/9yut2RPl0r9R0cidnqCr/GFDetails"), {
      name: "Sonia akter",
      age: 23,
    });
  };

  const getData = async () => {
    const ref = doc(db, "details", "9yut2RPl0r9R0cidnqCr");
    const sanp = await getDoc(ref);

    console.log("Document data:", sanp.data());
  };

  const queryData = async () => {
    const docRef = collection(db, "details");
    const q = query(docRef, where("name", "==", "Nesad"));

    const snapSot = await getDocs(q);
    snapSot.forEach((data) => {
      console.log("data is", data.data());
    });
  };

  const updatedoc = async () => {
    const reff = doc(db, "details", "9yut2RPl0r9R0cidnqCr");
    await updateDoc(reff, {
      relation: "Sonia akter soni",
    });
  };
  return (
    <>
      <h1>Hello Firebase firestore</h1>

      <button onClick={putData}>Put data</button>
      <button onClick={putSubData}>Put FGdata</button>
      <button onClick={getData}>getData</button>
      <button onClick={queryData}>getDa</button>
      <button onClick={updatedoc}>Update</button>
    </>
  );
}
