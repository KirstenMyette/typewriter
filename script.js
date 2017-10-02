$(document).ready(function () { 

$(document).bind('keydown', (function (e) {
    if('#kyboard-upper-container' + e.keyCode === 16) {
       $('#keyboard-upper-container').css('visibility', 'visible');}
    });
});