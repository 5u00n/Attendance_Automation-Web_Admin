document.addEventListener("DOMContentLoaded", (even) => {
  const app = firebase.app();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("from page load " + user.email);
      UpdateUI(user);
    }
  });
});

function UpdateUI(user) {
  //document.write("<H1> Welcome " + user.email + "</H1>");

  var starCountRef = firebase.database().ref("users/"+user.uid+"/requests");
  starCountRef.on("value", (snapshot) => {

    document.write("<ul>")
    snapshot.forEach((childSnapshot) => {
      //var childKey = childSnapshot.key;
      document.write("<li>"+childSnapshot.key+"</li>");
      // ...
    }
   
    );
   // document.write("/ul>");
  });
}
