// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxEGuCn7lCn5tURjec9M6X1QhlJQes3jo",
  authDomain: "context-daisyui-project.firebaseapp.com",
  projectId: "context-daisyui-project",
  storageBucket: "context-daisyui-project.appspot.com",
  messagingSenderId: "395398145471",
  appId: "1:395398145471:web:6e75e352a67d9e5cef2d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;