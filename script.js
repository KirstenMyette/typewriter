// var trueKeyCode = configureTrueKeyCode(keyCode, isShift);

// function configureTrueKeyCode(keyCode, isShift) {
//     if (isShift === false && keyCode >= 65 && keyCode <= 90) {
//         return keyCode + 32;
//     }

//     return keyCode;
// }

$(document).ready(function () {
$('#keyboard-upper-container').hide();


  $(document).keydown(function (event) {
    $("#" + event.which).css('background', 'yellow');
    if(event.which !==16) {
       return event.which + 32;
    }
    if (event.which == 16){ 
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
    });



    $(document).keyup(function (event) {
      $("#" + event.which).css('background', '#f5f5f5');
      if (event.which == 16){ 
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }
    });


    //end of doc ready function aka leave this one alone!
    });





