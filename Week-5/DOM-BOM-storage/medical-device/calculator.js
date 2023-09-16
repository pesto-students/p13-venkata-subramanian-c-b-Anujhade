function updateScore() {
    const radioGroups = [
      "AV",
      "AC",
      "PR",
      "UI",
      "scope",
      "conf",
      "integ",
      "avail",
      "health",
      "sens",
    ];
  
    const selectedValues = {};
  
    for (const group of radioGroups) {
      const selectedRadioButton = document.querySelector(
        `input[name="${group}"]:checked`
      );
      if (selectedRadioButton) {
        selectedValues[group] = parseFloat(selectedRadioButton.value);
      } else {
        document.getElementById("warning").style.display = "block";
        document.getElementById("score").textContent = "--";
        return;
      }
    }
  
    document.getElementById("warning").style.display = "none";
  
    const score =
      10 -
      selectedValues["AV"] +
      selectedValues["AC"] +
      selectedValues["PR"] +
      selectedValues["UI"] +
      selectedValues["scope"] +
      selectedValues["conf"] +
      selectedValues["integ"] +
      selectedValues["avail"] +
      selectedValues["health"] +
      selectedValues["sens"];
  
    const roundedScore = Math.round(score * 10) / 10;
  
    document.getElementById("score").textContent = roundedScore;
  }
  
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", updateScore);
  });
  
  updateScore();