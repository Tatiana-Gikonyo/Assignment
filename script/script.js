document.getElementById("akanForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const birthDate = document.getElementById("birthDate").value;
  const gender = document.getElementById("gender").value;
  const errorElement = document.getElementById("error");
  const resultElement = document.getElementById("result");

  // Clear previous messages
  errorElement.textContent = "";
  resultElement.textContent = "";

  // Validate input
  if (!birthDate || !gender) {
    errorElement.textContent = "Please enter a valid date and select your gender.";
    return;
  }

  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Ensure the date is valid
  if (isNaN(date.getTime())) {
    errorElement.textContent = "Invalid date. Please try again.";
    return;
  }

  const century = Math.floor(year / 100);
  const yearDigits = year % 100;

  // Formula for day of the week
  const dayOfWeek = Math.floor(
    (century / 4 -
      2 * century -
      1 +
      (5 * yearDigits) / 4 +
      (26 * (month + 1)) / 10 +
      day) %
      7
  );

  const correctedDayOfWeek = (dayOfWeek + 7) % 7; // Ensure the day of the week is non-negative

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let akanName;

  if (gender === "male") {
    akanName = maleNames[correctedDayOfWeek];
  } else if (gender === "female") {
    akanName = femaleNames[correctedDayOfWeek];
  } else {
    errorElement.textContent = "Invalid gender selected.";
    return;
  }

  resultElement.textContent = `Your Akan name is ${akanName}!`;
  resultElement.style.color = "green";
});
