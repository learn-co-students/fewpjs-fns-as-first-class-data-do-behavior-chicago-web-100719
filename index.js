/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
 function greet(time) {
   let timeArray = time.split(':');
   let hour = parseInt(timeArray[0]);
   let minute = parseInt(timeArray[1]);
   if (hour < 12 ) {
     return "Good Morning"
   }
   else if (hour > 17) {
    return "Good Evening"
   }
   else {
    return "Good Afternoon"
   }
 }

 function displayMessage(message) {
  document.getElementById("greeting").innerText = message
 }