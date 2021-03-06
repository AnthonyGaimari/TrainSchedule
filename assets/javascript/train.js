


// Firebase
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

// Button for Trains
$("#trainButton").on("click", function (event) {
  //If an event goes unhandled, its default action should not be taken as it normally would be
  event.preventDefault();
  // Grabs user input and stores them into variables
  var newTrain = $("#train-name-input").val().trim();
  var newDestination = $("#destination-input").val().trim();
  var newFirstTrain = $("#first-train-input").val().trim();
  var newFrequency = $("#frequency-input").val().trim();

  newObject = {
    train: newTrain,
    destination: newDestination,
    firstTrain: newFirstTrain,
    frequency: newFrequency
  };

  database.ref().push(newObject);

  // Logs everything to console
  console.log(newObject.train);
  console.log(newObject.destination);
  console.log(newObject.firstTrain);
  console.log(newObject.frequency);

  alert("Train successfully added!");

  // clears the input boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

});

database.ref().on("child_added", function (childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  var newTrain = childSnapshot.val().train;
  var newDestination = childSnapshot.val().destination;
  var newFirstTrain = childSnapshot.val().firstTrain;
  var newFrequency = childSnapshot.val().frequency;

  // Train Info
  console.log("First Train: " + newFirstTrain);
  console.log("Arrival " + newFrequency + " in minutes");

  var firstTrainConverted = moment(newFirstTrain, "hh:mm").subtract(1, "days");
  var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
  var timeApart = diffTime % newFrequency;
  var minutesAway = newFrequency - timeApart;
  var nextArrival = moment().add(minutesAway, "minutes");
  var nextArrival2 = moment(nextArrival).format("hh:mm");

  $("#train-table > tbody").append("<tr><td>" + newTrain + "</td> <td>" + newDestination + "</td> <td>" +
    newFrequency + "</td><td>" + nextArrival2 + "</td><td>" + minutesAway + "</td></tr>");


});




