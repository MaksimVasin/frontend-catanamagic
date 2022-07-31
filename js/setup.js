// elements
(function() {
  window.elemets = {
    setupWizard: document.querySelector('.setup-wizard'),
    setupBlock: document.querySelector('.setup')
  };
})();

// close open
(function() {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.elemets.setupBlock.querySelector('.setup-close');

  window.KEYCODE = {
    ENTER: 13,
    ESC: 27
  };

  var onEscPress = function(evt) {
    if (evt.keyCode === window.KEYCODE.ESC) {
      onSetupCloseClick();
    }
  };

  var onSetupOpenClick = function() {
    window.elemets.setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  };

  var onSetupCloseClick = function() {
    window.elemets.setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  };

  setupOpen.addEventListener('click', onSetupOpenClick);
  setupOpen.addEventListener('keydown', function(evt) {
    if (evt.keyCode === window.KEYCODE.ENTER)
      onSetupOpenClick();
  });
  
  setupClose.addEventListener('click', onSetupCloseClick);
  setupClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode === window.KEYCODE.ENTER)
      onSetupCloseClick();
  });

})();

