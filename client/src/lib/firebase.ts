import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const requiredConfig = Object.entries(firebaseConfig).filter(([, value]) => !value);
if (requiredConfig.length > 0) {
  throw new Error(`Missing Firebase configuration: ${requiredConfig.map(([key]) => key).join(", ")}`);
}

export const firebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

/**
 * Performs a real, read-only Firestore request. A missing health document is
 * considered a successful connection; the request itself proves the database
 * is reachable. Security-rule failures are surfaced to the caller.
 */
export async function checkFirestoreConnection() {
  const healthDocument = await getDoc(doc(firestore, "__connection_test__", "connection"));
  return {
    reachable: true,
    healthDocumentExists: healthDocument.exists(),
  };
}
