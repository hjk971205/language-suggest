//Business Logic
function languageSuggest(event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput").value;
  document.querySelector("span#name").innerText = nameInput;

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
  if (location === "france") {
    if (potential === "beginner") {
      language = "HTML";
    }
  } else {
    if (potential === "beginner") {
      langage = "Java";
    }
  }
}


//Interface Logic