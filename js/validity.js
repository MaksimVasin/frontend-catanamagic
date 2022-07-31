// validity
(function() {
  var setupUserName = window.elemets.setupBlock.querySelector('.setup-user-name');

  setupUserName.addEventListener('invalid', function() {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity("Имя должно состоять минимум из 2 букв");
  }
  else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity("Имя должно состоять максимум из 25 букв");
  }
  else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity("Обязательное поле");
  }
});

setupUserName.addEventListener('input', function() {
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2 букв');
  }
  else if (target.value.length < 25) {
    setupUserName.setCustomValidity("Имя должно состоять максимум из 25 букв");
  }
});
})();