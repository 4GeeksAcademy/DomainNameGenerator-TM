/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net"];

  function domain() {
    let domains = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let h = 0; h < noun.length; h++) {
          for (let k = 0; k < extension.length; k++) {
            domains.push(
              `<li> ${pronoun[i] + adj[j] + noun[h] + extension[k]} </li> <br>`
            );
          }
        }
      }
    }
    return domains.join("");
  }
  document.querySelector("#domain").innerHTML = domain();
};
