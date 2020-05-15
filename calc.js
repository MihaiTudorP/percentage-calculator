var numfield1 = document.getElementById('numField1');
var numfield2 = document.getElementById('numField2');
var resultField = document.getElementById('result');
var form = document.getElementById('xIsWhatPercentOfY');
form.addEventListener('submit', function (event) {
  if (!numfield1.value || !numfield2.value) {
    alert('Please enter values in the fields!');
  } else {
    var x = parseFloat(numfield1.value);
    var y = parseFloat(numfield2.value);
    var percent = (x * 100) / y;
    resultField.innerText = 'Result ' + percent + '%';
    event.preventDefault();
  }
});
