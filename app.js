// https://calculator.swiftutors.com/debt-to-equity-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const debttoEquityRatioRadio = document.getElementById('debttoEquityRatioRadio');
const totalLiabilitiesRadio = document.getElementById('totalLiabilitiesRadio');
const shareholdersEquityRadio = document.getElementById('shareholdersEquityRadio');

let debttoEquityRatio;
let totalLiabilities = v1;
let shareholdersEquity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

debttoEquityRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Liabilities';
  variable2.textContent = 'Shareholders Equity';
  totalLiabilities = v1;
  shareholdersEquity = v2;
});

totalLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt to Equity Ratio';
  variable2.textContent = 'Shareholders Equity';
  debttoEquityRatio = v1;
  shareholdersEquity = v2;
});

shareholdersEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt to Equity Ratio';
  variable2.textContent = 'Total Liabilities';
  debttoEquityRatio = v1;
  totalLiabilities = v2;
});

btn.addEventListener('click', function() {
  
  if(debttoEquityRatioRadio.checked)
    result.textContent = `Debt to Equity Ratio = ${computeDebttoEquityRatio().toFixed(2)}`;

  else if(totalLiabilitiesRadio.checked)
    result.textContent = `Total Liabilities = ${computeTotalLiabilities().toFixed(2)}`;

  else if(shareholdersEquityRadio.checked)
    result.textContent = `Shareholders Equity = ${computeShareholdersEquity().toFixed(2)}`;
})

// calculation

function computeDebttoEquityRatio() {
  return Number(totalLiabilities.value) / Number(shareholdersEquity.value);
}

function computeTotalLiabilities() {
  return Number(debttoEquityRatio.value) * Number(shareholdersEquity.value);
}

function computeShareholdersEquity() {
  return Number(totalLiabilities.value) / Number(debttoEquityRatio.value);
}