function calculateEMI() {
  var loanAmount = parseFloat(document.getElementById("loan-amount").value);
  var interestRate = parseFloat(document.getElementById("interest-rate").value);
  var loanTerm = parseInt(document.getElementById("loan-term").value);

  var monthlyInterest = interestRate / 100 / 12;
  var emi =
    (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) /
    (Math.pow(1 + monthlyInterest, loanTerm) - 1);

  var formattedEMI = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(emi);

  var emiResult = document.getElementById("emi-result");
  emiResult.innerHTML = "Monthly EMI: " + formattedEMI;
}
