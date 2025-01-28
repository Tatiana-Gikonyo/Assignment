document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthDate = document.getElementById("birthDate").value;
  const gender = document.getElementById("gender").value;
  const errorElement = document.getElementById("error");
  const resultElement = document.getElementById("result");

  errorElement.textContent = "";
  resultElement.textContent = "";

  if (!birthDate || !gender) {
    errorElement.textContent =
      "Please enter a valid date and select your gender.";
    return;
  }

  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day <= 0 || day > 31 || month <= 0 || month > 12) {
    errorElement.textContent = "Invalid date or month. Please try again.";
    return;
  }

  const century = Math.floor(year / 100);
  const yearDigits = year % 100;

  const dayOfWeek = Math.floor(
    (century / 4 -
      2 * century -
      1 +
      (5 * yearDigits) / 4 +
      (26 * (month + 1)) / 10 +
      day) %
      7
  );

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
"
  let akanName;
  if (gender === "male"){
    akanName = maleNames[correctdayOfWeek];
   }else if (gender === "female"){
    akanName = femaleNames[correctedDayofweek];
   }else {
    output.textContent = "Invalid gender is selected.";
    output.style.color = "red";
    return;
   }
   output.textContent = 'Your Akan name is ${akanName}!';
   output.style.color = "green";
  });
