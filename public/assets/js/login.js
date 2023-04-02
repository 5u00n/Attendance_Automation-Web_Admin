const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// Add login form submit event listener
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user email and password
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in user with Firebase authentication
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to dashboard or do something else
      console.log("User signed in successfully");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
});

document.addEventListener("DOMContentLoaded", (even) => {
  const app = firebase.app();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("fropm page load " + user.email);
      UpdateUI(user);
    }
  });
});


function preloadFunc()
    {
        alert("PreLoad");
    }
window.onpaint = preloadFunc();


function UpdateUI(user){
    window.location = "./admin/";
}

