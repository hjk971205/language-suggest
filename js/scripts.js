//Business Logic
function languageSuggest(event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput").value;
  document.querySelector("span#name").innerText = nameInput;

  const numberInput = parseInt(document.querySelector("input#numberInput").value);
  document.querySelector("span#time").innerText = numberInput;

  let potential;
  const experience = document.getElementById("experience").value;
  if (experience === "1") {
    potential = "beginner";
  } else if (experience === "2") {
    potential = "intermediate";
  } else {
    potential = "expert";
  }

  let language;
  const location = document.querySelector("input[name= 'location']:checked").value;
  if (location === "france" && potential === "beginner") {
    language = "HTML";
  } else if (location === "germany" && potential === "beginner") {
    language = "Java";
  } else {
    window.alert("ERROR!");
  }

  if (location === "france" && potential === "intermediate") {
    language = "React";
  } else if (location === "germany" && potential === "intermediate") {
    language = "Python";
  } else {
    window.alert("ERROR!");
  }

  if (location === "france" && potential === "expert") {
    language = "RUBY";
  } else if (location === "germany" && potential === "expert") {
    language = "C#";
  } else {
    window.alert("ERROR!");
  }

  document.getElementById("output1a").innerText = language;
  document.getElementById("output1b").innerText = language;
  document.querySelector("div#result").removeAttribute("class");
}

//Interface Logic
window.addEventListener("load", function () {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", languageSuggest);
});