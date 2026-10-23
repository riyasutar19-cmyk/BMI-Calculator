const bmiForm = document.getElementById("bmi-form");

if (bmiForm) {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const formMessage = document.getElementById("form-message");
  const resultPanel = document.getElementById("result-panel");
  const result = document.getElementById("result");
  const resultCategory = document.getElementById("result-category");

  bmiForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const heightCm = Number(heightInput.value);
    const weightKg = Number(weightInput.value);
    formMessage.textContent = "";
    resultPanel.hidden = true;

    if (heightInput.value.trim() === "" || weightInput.value.trim() === "") {
      formMessage.textContent = "Please enter both your height and weight.";
      return;
    }
    if (!Number.isFinite(heightCm) || !Number.isFinite(weightKg) || heightCm <= 0 || weightKg <= 0) {
      formMessage.textContent = "Please enter valid positive numbers.";
      return;
    }
    if (heightCm > 300 || weightKg > 500) {
      formMessage.textContent = "Please check the height and weight values you entered.";
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    result.textContent = bmi.toFixed(2);

    // Adult reference bands only; BMI in children and teens needs age-specific interpretation.
    if (bmi < 18.5) resultCategory.textContent = "Below the usual adult reference range";
    else if (bmi < 25) resultCategory.textContent = "Within the usual adult reference range";
    else if (bmi < 30) resultCategory.textContent = "Above the usual adult reference range";
    else resultCategory.textContent = "Higher adult BMI range";

    resultPanel.hidden = false;
  });

  bmiForm.addEventListener("reset", function() {
    formMessage.textContent = "";
    result.textContent = "—";
    resultCategory.textContent = "";
    resultPanel.hidden = true;
  });
}
