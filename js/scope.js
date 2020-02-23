var myVar = 125;
let myLet = 2;
const myConst = 3;

function testVar() {
  myVar = 1;
  console.log("Inside the function, myVar is: " + myVar);
}

const inputEl = document.querySelector("input");
let inputLength = 0;
const curlen = document.querySelector(".curlen span");
// Add your event listener here
// inputEl.addEventListener("keyup", fixLength);
inputEl.addEventListener("keyup", sayTooMuch);

function fixLength() {
  // Your code here
  inputLength = inputEl.value.length;
  curlen.innerText = inputLength;
  if (inputLength > 12) {
    inputEl.value = inputEl.value.slice(0, -1);
    curlen.innerText = 12;
  }
}

function sayTooMuch() {
  // Your code here
  inputLength = inputEl.value.length;
  curlen.innerText = inputLength;
  if (inputLength > 12) {
    curlen.style.background = "crimson";
    curlen.style.color = "white";
    curlen.appendChild(
      document.createTextNode(
        ` characters. You've said too much! Please erase ${inputLength -
          12} character${inputLength - 12 == 1 ? "" : "s"}!`
      )
    );
  } else {
    curlen.style.background = "limegreen";
    curlen.style.color = "black";
    curlen.appendChild(
      document.createTextNode(` character${inputLength == 1 ? "" : "s"}`)
    );
  }
}

/****************************** Challenge 1 ******************************/
const getInitials = (firstName, lastName) => {
  firstName[0] + lastName[0];
};
console.log(getInitials("Charlie", "Brown")); // this should console.log "CB"

/****************************** Challenge 2 ******************************/
function getStudentGrade(finalExamPoints, assignmentsPoints) {
  const percent = ((finalExamPoints + assignmentsPoints) / 300) * 100;
  let grade = "Unknown";
  if (percent >= 90) {
    return (grade = "A");
  }
  if (percent >= 80) {
    return (grade = "B");
  }
  if (percent >= 70) {
    return (grade = "C");
  }
  if (percent >= 60) {
    return (grade = "D");
  }
  if (percent < 60) {
    return (grade = "F");
  }
}
console.log(getStudentGrade(70, 180)); // this should console.log "B"

/****************************** Challenge 4 ******************************/
function hasTreat(treat) {
  const treatsArr = ["cookie", "cake", "muffin", "pie", "ice cream"];
  if (treatsArr.includes(treat) == true) {
    return true;
  }
  return false;
}
if (hasTreat("pie")) {
  // You should have a cookie.
  console.log("You have a cookie!");
} else {
  console.log("You have no cookie."); // This is wrong. You should have a cookie.
}

function reverseSansReverse(string) {
  let gnirts = "";
  for (let i = string.length; i > 0; i--) {
    gnirts += string[i];
  }
  console.log(gnirts);
}
// "Hello World!"
