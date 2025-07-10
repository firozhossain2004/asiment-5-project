function libareinput(id) {
  const inputDonat = document.getElementById(id).value;
  const inputDonatNumber = parseFloat(inputDonat);
  return inputDonatNumber;
}
function divbalanceText(id) {
  const balanceData = document.getElementById(id).innerText;
  const balanceDataNumber = parseFloat(balanceData);
  return balanceDataNumber;
}
function donatAndHistory(id) {
  document.getElementById("donate-continer").classList.add("hidden");

  document.getElementById("history-continer").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
