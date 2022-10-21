
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCUclR7k-RqBOk5a3mUzv2Xf_gquw5lXJs",
      authDomain: "kwitter-1-ee87c.firebaseapp.com",
      databaseURL: "https://kwitter-1-ee87c-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-ee87c",
      storageBucket: "kwitter-1-ee87c.appspot.com",
      messagingSenderId: "325044352487",
      appId: "1:325044352487:web:ebb342134eaa7dedf3b942"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("user_name");

document.getElementById("welcome").innerHTML = "Welcome " + username;

function addRoom() {
      roomname = document.getElementById("roomname").value;
      console.log("adding room " + roomname);
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", roomname);
      document.getElementById("roomname").value = "";
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log("navigating to " + name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
