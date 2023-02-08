import { createApp } from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBOFPmfylrfjIpLjIWX2RFrOkWopALwYEo",
  authDomain: "app-vue-spa.firebaseapp.com",
  projectId: "app-vue-spa",
  storageBucket: "app-vue-spa.appspot.com",
  messagingSenderId: "306904813261",
  appId: "1:306904813261:web:f34a6d41838814b46de384"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
