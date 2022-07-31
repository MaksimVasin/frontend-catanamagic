window.backend = (function() {

  return {
    load: function(onSucces, onError) {
      var urlLoad = 'https://24.javascript.pages.academy/code-and-magick/data';

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.open('GET', urlLoad);

      xhr.addEventListener('load', function() {
        if (xhr.status === 200) {
          onSucces(xhr.response);
        }
        else {
          onError(xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.send();

      //var urlLoad
      

      //console.log(xhr.readyState);

      /* try {
        console.log(JSON.parse(xhr.responseText));
      }
      catch (err) {
        console.error(err.message);
      } */
      ////////////////////////////////

      /* xhr.addEventListener('error', function() {
        onError('errorrrr');
      });

      xhr.addEventListener('timeout', function() {
        onError('tiiime');
      })

      xhr.timeout = 1000; */
    },

    save: function (data, onSucces) {

      var urlSave = 'https://24.javascript.pages.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function() {
        var error;
        switch (xhr.status) {
          case 200:
            onSucces(xhr.response);
            break;

          case 400:
            error = 'neverni zapros';

          default:
            error = 'Status:' + xhr.status + ' ' + xhr.statusText;
        }
      });

      xhr.open('POST', urlSave);
      xhr.send(data);
    }
  }

})();


(function() {

  var form = window.elemets.setupBlock.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function(evt) {
    window.backend.save(new FormData(form), function (response) {
      window.elemets.setupBlock.classList.add('hidden');
    });
    evt.preventDefault();
  });


  /* window.backend.load(function(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    simularListElement.appendChild(fragment);
    window.elemets.setupBlock.querySelector('.setup-similar').classList.remove('hidden'); 
  }, function(error) {
    console.log(error);
  }); */

})();


// similar.js
/* (function() {
  var wizard = [];

  var successHandler = (data) => {
    wizard = data;
    window.renderWizard(wizard)
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

  var URL = 'https://24.javascript.pages.academy/code-and-magick/data';
  window.backend.load(successHandler, errorHandler);
})(); */