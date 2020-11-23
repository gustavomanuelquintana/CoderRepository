import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBBQX8lj4qHe6tvKRoOoww0TMShCYK8iI8",
    authDomain: "cartcoderecommerce17.firebaseapp.com",
    databaseURL: "https://cartcoderecommerce17.firebaseio.com",
    projectId: "cartcoderecommerce17",
    storageBucket: "cartcoderecommerce17.appspot.com",
    messagingSenderId: "930405902799",
    appId: "1:930405902799:web:b8ca51490cdad2d1698aba"
});
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
// Export other firebase integrations