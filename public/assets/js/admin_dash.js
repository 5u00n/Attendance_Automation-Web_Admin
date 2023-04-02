document.addEventListener("DOMContentLoaded", (even) => {
    const app = firebase.app();
  
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("fropm page load " + user.email);
        UpdateUI(user);
      }else{
        gotoLoginPage();
      }
    });
  });


  function gotoLoginPage(){
    window.location = "./";
  }


const username= document.querySelector("#username");



function UpdateUI(user){
    $('#email').append(user.email,'<i class="material-icons float-right">arrow_drop_down</i>');

  }

  $('#sign-out').click(function(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        gotoLoginPage();           1
      }).catch((error) => {
        // An error happened.
      });
      
  });

