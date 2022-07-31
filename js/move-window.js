(function() {
  var UserPic = window.elemets.setupBlock.querySelector(".upload");

  UserPic.addEventListener('mousedown', function(evt) {
    evt.preventDefault();

    var StartCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();
  
      dragged = true;

      var Shift = {
        x: StartCoords.x - moveEvt.clientX,
        y: StartCoords.y - moveEvt.clientY
      };
  
      StartCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
  
      setupBlock.style.top = (setupBlock.offsetTop - Shift.y) + 'px';
      setupBlock.style.left = (setupBlock.offsetLeft - Shift.x) + 'px';
  
    };
  
    var onMouseUp = function(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function(evt) {
          evt.preventDefault();
          UserPic.removeEventListener('click', onClickPreventDefault);
        };
        UserPic.addEventListener('click', onClickPreventDefault);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();