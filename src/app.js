/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("bestExcuse").innerHTML = differentExcuses();
};
function differentExcuses() {
  let subject = [
    "A slow merchant",
    "A lonely comedian",
    "A two headed pinecone",
    "A lonely merchant",
    "A lonely jogger"
  ];
  let verb = ["burned", "threw", "kicked", "yelled at", "stole"];
  let object = [
    "my car",
    "my computer",
    "my sandwich",
    "my grandma's dentures",
    "my dog"
  ];
  let place = [
    "in front of the office",
    "on the street",
    "near the toilet",
    "in my house",
    "in the ocean"
  ];

  var randomSubject = Math.floor(Math.random() * subject.length);
  var randomVerb = Math.floor(Math.random() * verb.length);
  var randomObject = Math.floor(Math.random() * object.length);
  var randomPlace = Math.floor(Math.random() * place.length);

  return (
    subject[randomSubject] +
    " " +
    verb[randomVerb] +
    " " +
    object[randomObject] +
    " " +
    place[randomPlace]
  );
}
