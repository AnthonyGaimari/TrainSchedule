


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBnqU73zPZUOqlOOt-LHrelF2eWmExFFC4",
    authDomain: "trainschedule-a523b.firebaseapp.com",
    databaseURL: "https://trainschedule-a523b.firebaseio.com",
    projectId: "trainschedule-a523b",
    storageBucket: "trainschedule-a523b.appspot.com",
    messagingSenderId: "1035098701759"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  database.ref().on("value", function (snapshot) {
    
    console.log(snapshot.val());
  
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  // $("#button").on("click", function(){
  //   database.ref().push({
  //     clickCount: clickCounter
  //     clickCount: clickCounter
  //     clickCount: clickCounter

  //   });
  // })



