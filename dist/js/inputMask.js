document.getElementById('inputPhone').addEventListener('input', function (e) {
  var cleanVal = e.target.value.replace("+1", '');
  var x = cleanVal.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  //e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  //e.target.value = '+7(' + x[1] + ')' + x[2] + '-' + x[3] + '-' + x[4]; 
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ')-' + x[2] + (!x[3] ? '' : '-' + x[3]) + (!x[4] ? '' : '-' + x[4]);
    e.target.value = "+1 " + e.target.value;
});