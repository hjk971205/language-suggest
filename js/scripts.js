//Business Logic
function generateRandomColor() {
  const hexDigits = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexDigits[Math.floor(Math.random() * 16)];
  }
  return color;
}

function languageSuggest(event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput").value;
  if (!nameInput) {
    alert('Please enter your name.');
    return;
  }
  document.querySelector("span#name").innerText = nameInput;

  const numberInput = parseInt(document.querySelector("input#numberInput").value);
  if (isNaN(numberInput) || numberInput < 1 || numberInput > 10) {
    alert('Please enter a valid number between 1 and 10.');
    return;
  }
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
  } else if (location === "france" && potential === "intermediate") {
    language = "React";
  } else if (location === "germany" && potential === "intermediate") {
    language = "Python";
  } else if (location === "france" && potential === "expert") {
    language = "RUBY";
  } else if (location === "germany" && potential === "expert") {
    language = "C#";
  } else {
    window.alert("ERROR!");
  }

  document.getElementById("output1a").innerText = language;
  document.getElementById("output1b").innerText = language;
  document.querySelector("div#result").removeAttribute("class");

  const wikiLink = document.getElementById("wikiLink");
  if (language === "HTML") {
    wikiLink.href = "https://en.wikipedia.org/wiki/HTML";
  } else if (language === "Java") {
    wikiLink.href = "https://en.wikipedia.org/wiki/Java_(programming_language)";
  } else if (language === "React") {
    wikiLink.href = "https://en.wikipedia.org/wiki/React_(JavaScript_library)";
  } else if (language === "Python") {
    wikiLink.href = "https://en.wikipedia.org/wiki/Python_(programming_language)";
  } else if (language === "RUBY") {
    wikiLink.href = "https://en.wikipedia.org/wiki/Ruby_(programming_language)";
  } else if (language === "C#") {
    wikiLink.href = "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)";
  } else {
    wikiLink.href = "#";
  }
  document.getElementById("languageLink").innerText = language;
  const resultDiv = document.getElementById('result');
  resultDiv.style.backgroundColor = generateRandomColor();
  resultDiv.removeAttribute('class');
}

//Interface Logic
window.addEventListener("load", function () {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", languageSuggest);
});