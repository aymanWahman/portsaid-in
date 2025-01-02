// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXPSh6Kfd56jvIcWLTtlwUR4EqGVIgdD8",
  authDomain: "https://portsaid-in.firebaseapp.com",
  projectId: "portsaid-in",
  storageBucket: "https://portsaid-in.firebasestorage.app",
  messagingSenderId: "614945732462",
  appId: "1:614945732462:web:00877d338f66c06e9ef37f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };