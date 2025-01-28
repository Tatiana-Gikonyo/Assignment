document.getElementById("akanForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const birthDate = document.getElementById("birthDate").value;
  const gender = document.getElementById("gender").value;
  const errorElement = document.getElementById("error");
  const resultElement = document.getElementById("result");

  errorElement.textContent = "";
  resultElement.textContent = "";

  // Check if the user entered a birth date and selected a gender
  if (!birthDate || !gender) {
    errorElement.textContent = "Please enter a valid date and select your gender.";
    return;
  }

  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-indexed
  const year = date.getFullYear();

  // Ensure the date is valid
  if (isNaN(date.getTime())) {
    errorElement.textContent = "Invalid date. Please try again.";
    return;
  }

  const century = Math.floor(year / 100);
  const yearDigits = year % 100;

  // Adjust the month for calculation
  const adjustedMonth = (month + 9) % 12; 

  // Calculate day of the week using the Akan formula (Zeller's Congruence)
  const dayOfWeek = Math.floor(
    (century / 4 - 2 * century - 1 + Math.floor(5 * yearDigits) / 4 + Math.floor(26 * adjustedMonth + 1) / 10) + day
  ) % 7;

  const correctedDayOfWeek = (dayOfWeek + 7) % 7; // Ensure it's positive

  // Akan names for days of the week
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let akanName;

  // Assign the Akan name based on the gender and day of the week
  if (gender === "male") {
    akanName = maleNames[correctedDayOfWeek];
  } else if (gender === "female") {
    akanName = femaleNames[correctedDayOfWeek];
  } else {
    errorElement.textContent = "Invalid gender selected.";
    return;
  }

  // Display the result
  resultElement.textContent = `Your Akan name is ${akanName}!`;
  resultElement.style.color = "green";
});
