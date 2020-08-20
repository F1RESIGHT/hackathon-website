 


// Instructions:
// 
// Types of cookies and how much they fill up cookie monster
const cookies ={
    car: -20,
    plane: -10,
    bike: 10,
    ____: 0,
    meat: 5,
    vegetables: 2,
    fruit: 2,
    _____: 0,
    fifteen_minutes_or_more: +20,
    five_to_ten_minutes: +20,
    five_minutes_or_less: -20,
    ______: 0,
    yes: +20,
    sometimes: +5,
    no: -20,
    _______: 0,
    ten_to_twenty: +10,
    five_to_ten: +5,
    twenty_or_more: +15,
    //maybe like do you always finish your meals or do you have luxury items aka "phone" or how much trash do you think you produce more or less.
    

}
let selectedCookie = 'car'; 
// Cookie that is selected
// 1. When the window/browser loads...
//       - generate the dropdown menu with options
//       - add an on change event listener for the dropdown menu
//       - add an on click event listener for the cookie jar
window.addEventListener("load", function () {
    let cookieOptions = Object.keys(cookies);
  //["burnt", "broccoli", "mnm", "chocolate", "snickerdoodle", "fudge"]
    let dropDown = document.querySelector("select");
    for (let i = 0; i < cookieOptions.length; i++) {
      let option = document.createElement("option");
      option.textContent = cookieOptions[i];
      option.value = cookieOptions[i];
      dropDown.appendChild(option);
  }
let cookieJar = document.querySelector("#jar-section img");
  cookieJar.addEventListener("click", generateCookie);
});





// 2. Create a function called generateCookie that creates the selected
//    cookie DOM element and attaches it to the plate, make sure the cookie
//    has the following traits: 
//       - is an img tag
//       - alt attribute containing the type of cookie it is
//       - contains the class cookie
//       - contains the src of the selectedTypeCookie
function generateCookie(){
  let cookie = document.createElement("img");
  cookie.alt = selectedCookie
  cookie.src = selectedCookie + ".png";
  cookie.classList.add("cookie");
  cookie.classList.add(selectedCookie);
  cookie.addEventListener("click", monsterEat);


  let plate = document.querySelector("#plate-section");
  plate.appendChild(cookie);
}
// 3. Create a function called monsterEat that contains a parameter called cookie
//    that is the target cookie that cookie monster will eat that does the
//    following:
//       - removes the cookie from the plate
//       - calls and assigns the value returned from the 
//         calculateHunger function (found in the helper-function.js) passing
//         in the cookie that is to be removed the width of the full meter
function monsterEat (cookie) {
  let targetedCookie = cookie.target;
  cookie.target.remove();

  let fullMeter = document.querySelector("#full-meter > div");
  fulllMeter.style.width = calculateHunger(targetedCookie);
  
}
