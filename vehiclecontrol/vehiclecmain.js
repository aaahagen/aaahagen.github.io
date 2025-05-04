// Firebase config – erstatt med dine egne verdier fra Firebase Console
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "vehicle-control-aaah.firebaseapp.com",
  projectId: "vehicle-control-aaah",
  storageBucket: "vehicle-control-aaah.appspot.com",
  messagingSenderId: "123456789",
  appId: "APP_ID_HER"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Skjema-håndtering
document.getElementById("controlForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const driverName = document.getElementById("driverName").value;
  const vehicleId = document.getElementById("vehicleId").value;
  const comment = document.getElementById("comment").value;

  const data = {
    driverName,
    vehicleId,
    timestamp: new Date().toISOString(),
    generalComment: comment,
    status: "complete"
  };

  try {
    const docRef = await addDoc(collection(db, "inspections"), inspectionData);
    console.log("Kontroll lagret!");
    console.log("Dokument-ID:", docRef.id);
    alert("Kontroll lagret med ID: " + docRef.id);
  } catch (error) {
    console.error("Feil ved lagring til Firestore:", error);
    alert("Kunne ikke lagre kontroll. Sjekk konsollen for detaljer.");
  }
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIpEnVeWlrx_B5_MwviEh-js4hF_benx0",
  authDomain: "vehicle-control-aaah.firebaseapp.com",
  projectId: "vehicle-control-aaah",
  storageBucket: "vehicle-control-aaah.firebasestorage.app",
  messagingSenderId: "601713524662",
  appId: "1:601713524662:web:d66d662974a1acc7784b17",
  measurementId: "G-F0BQJMFHMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);