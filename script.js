document.getElementById('akanForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const birthDate = document.getElementById('birthDate').value;
    const gender = document.getElementById('gender').value;
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');

    // Clear previous error or result
    errorElement.textContent = '';
    resultElement.textContent = '';

    // Validate input
    if (!birthDate || !gender) {
        errorElement.textContent = 'Please enter a valid date and select your gender.';
        return;
    }

    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-based in JavaScript
    const year = date.getFullYear();

    if (day <= 0 || day > 31 || month <= 0 || month > 12) {
        errorElement.textContent = 'Invalid date or month. Please try again.';
        return;
    }

    const century = Math.floor(year / 100);
    const yearDigits = year % 100;

    // Calculate day of the week using formula
    const dayOfWeek = Math.floor(
        ((century / 4) - 2 * century - 1 + (5 * yearDigits / 4) + (26 * (month + 1) / 10) + day) % 7
    );

    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const akanName = gender === 'male' ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
    resultElement.textContent = `Your Akan name is ${akanName}.`;
});
