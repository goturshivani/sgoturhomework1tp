 /* 
 Name: Shivani Gotur 
    Date created: 02/23/2026
    Date last updated: 02/26/2026
    Purpose: Homework 1 JS Form 
*/

//dynamic date js code//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;


//name slider js code//
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

slider.oninput = function () {output.innerHTML = this.value;};
