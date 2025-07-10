document
  .getElementById("donation-Noakhali")
  .addEventListener("click", function () {
    const inputDonatNumber = libareinput("donation-Noakhali-input");
    if (inputDonatNumber >= 10 && inputDonatNumber !== String) {
      const mainbalanceData = divbalanceText("total-balance");
      if (mainbalanceData < inputDonatNumber) {
        alert("Your balance low");
        return;
      }
      const noakhaliDonateionBalance = divbalanceText(
        "noakhali-donateion-balance"
      );
      const newbalancemain = mainbalanceData - inputDonatNumber;
      document.getElementById("total-balance").innerText = newbalancemain;
      const newbalanceNoiakale = noakhaliDonateionBalance + inputDonatNumber;
      document.getElementById("noakhali-donateion-balance").innerText =
        newbalanceNoiakale;
      alert("Thank you: You Have Donate successful ");
    } else {
      alert("Thank you: You Have Donate Poblame ");
    }

    const p = document.createElement("p");
    p.innerText = `${inputDonatNumber} Taka is Donated for Noakhali-2025 at Noakhali, Bangladesh.`;
    document.getElementById("history-continer").appendChild(p);
  });
document.getElementById("Feni-button").addEventListener("click", function () {
  const inputFeniNumber = libareinput("fani-input");
  if (inputFeniNumber >= 10 && inputFeniNumber !== String) {
    const mainbalanceData = divbalanceText("total-balance");
    if (mainbalanceData < inputFeniNumber) {
      alert("Your balance low");
      return;
    }
    const faniMainBalance = divbalanceText("feni-donateion-Balance");
    const newbalancemain = mainbalanceData - inputFeniNumber;
    document.getElementById("total-balance").innerText = newbalancemain;
    const newfaniMainBalance = faniMainBalance + inputFeniNumber;
    document.getElementById("feni-donateion-Balance").innerText =
      newfaniMainBalance;
    alert("Thank you: You Have Donate successful ");
  } else {
    alert("Thank you: You Have Donate Poblame ");
  }
  const p = document.createElement("p");
  p.innerText = `${inputFeniNumber} Taka is Donated for Feni-2025 at Feni, Bangladesh.`;
  document.getElementById("history-continer").appendChild(p);
});

document.getElementById("Quota-btn").addEventListener("click", function () {
  const inputQuotaNumber = libareinput("quota-input");
  if (inputQuotaNumber >= 10 && inputQuotaNumber !== String) {
    const mainbalanceData = divbalanceText("total-balance");
    if (mainbalanceData < inputQuotaNumber) {
      alert("Your balance low");
      return;
    }
    const quotaMainBalance = divbalanceText("quota-donateion-Balance");
    const newbalancemain = mainbalanceData - inputQuotaNumber;
    document.getElementById("total-balance").innerText = newbalancemain;
    const newQotaMainBalance = quotaMainBalance + inputQuotaNumber;
    document.getElementById("quota-donateion-Balance").innerText =
      newQotaMainBalance;
    alert("Thank you: You Have Donate successful ");
  } else {
    alert("Thank you: You Have Donate Poblame ");

    const p = document.createElement("p");
    p.innerText = `${inputQuotaNumber} Taka is Donated for quot-2025 at qeni, Bangladesh.`;
    document.getElementById("history-continer").appendChild(p);
  }
});

document.getElementById("donate-from").addEventListener("click", function () {
  donatAndHistory("donate-continer");
});
document.getElementById("history-from").addEventListener("click", function () {
  donatAndHistory("history-continer");
});
