'use strict';
(function() {
// debounce.js
  const DEBOUNCE_INTERVAL = 600;
  var lastTimeout;

  window.debounce = function(fun) {
    window.clearTimeout(lastTimeout);
    var args = arguments;
    lastTimeout = window.setTimeout(function() {
      fun(null, args);
    }, DEBOUNCE_INTERVAL);
  };
})();


(function() {
  // change colors
  var wizardCoat = window.elemets.setupWizard.querySelector('.wizard-coat');
  var wizardCoatIndex = 0;
  wizardCoat.addEventListener('click', function() {
    if (wizardCoatIndex >= colorsCoat.length - 1)
      wizardCoatIndex = 0;
    else
      wizardCoatIndex++;
    wizardCoat.style.fill = colorsCoat[wizardCoatIndex];
    coatColor = colorsCoat[wizardCoatIndex];
    window.debounce(updateWizards);
  });

  var wizardEyes = window.elemets.setupWizard.querySelector('.wizard-eyes');
  var wizardEyesIndex = 0;
  wizardEyes.addEventListener('click', function() {
    if (wizardEyesIndex >= colorsEyes.length - 1) 
      wizardEyesIndex = 0;
    else 
      wizardEyesIndex++;
    wizardEyes.style.fill = colorsEyes[wizardEyesIndex];
    eyesColor = colorsEyes[wizardEyesIndex];
    window.debounce(updateWizards);
  });
  //

  var coatColor = colorsCoat[0]; 
  var eyesColor = colorsEyes[0];
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) rank +=2;
    if (wizard.colorEyes === eyesColor) rank ++;
    return rank;
  }

  var namesComparaotr = function(left, right) {
    if (left > right) return 1;
    else if (left < right) return - 1;
    else return 0;
  }

  var updateWizards = () => {
    window.renderWizard(wizards.sort(function(left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparaotr(left.name, right.name);
      }
      return rankDiff;
    }));

    var fragment = document.createDocumentFragment();
  
    var oldFragments = document.querySelectorAll('.setup-similar-item');
    for (var i = 0; i < oldFragments.length; i++) {
      oldFragments[i].remove();
    }

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    simularListElement.appendChild(fragment);
    window.elemets.setupBlock.querySelector('.setup-similar').classList.remove('hidden'); 
  }


  var successHandler = (data) => {
    wizards = data;
    updateWizards();
  }

  var errorHandler = (errorMessage) => {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend.load(successHandler, errorHandler);
})();