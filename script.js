var sentences = [
    'this is my first sentence',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tainnate eate tea anne inant nean',
    'itant eate anot eat nato inate eatanot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
];
var sentenceCounter = sentences[0];
var currentSentence = sentences[sentenceCounter];
var sentenceContainer

var characterCounter = 0;
var upper,
    lower;
    



$(document).ready(() => {
    upper = $('#keyboard-upper-container');
    lower = $('#keyboard-lower-container');
    sentenceContainer = $(sentences);

 toggleKeyboards();
 appendSentences();
 countSentence();

    $(document).on('keyup keydown', (e) => {
        handleKeyPress(e.type, e.shiftKey, e.keyCode);
    });
});

function handleKeyPress(type, isShift, keyCode) {
    if (keyCode === 16) {
        if (type === 'keydown') {
            toggleKeyboards(true);
        } else {
            toggleKeyboards();
        }
    }

    var trueKeyCode = configureTrueKeyCode(keyCode, isShift);

    handleHighlight(trueKeyCode, type);
}

function handleHighlight(keyCode, type) {
    if (type === 'keydown') {
        $('#' + keyCode).css('background-color', 'yellow');
    } else {
        $('#' + keyCode).css('background-color', '#f5f5f5');
    }
}

function configureTrueKeyCode(keyCode, isShift) {
    if (isShift === false && keyCode >= 65 && keyCode <= 90) {
        return keyCode + 32;
    }

    return keyCode;
}

function toggleKeyboards(showUpper) {
    if (showUpper) {
        lower.hide();
        upper.show();
    } else {
        upper.hide();
        lower.show();
    }
}

function appendSentences() { 
    $('#prompt-container').append(sentences[0]);
    
}

function countSentence () {
   
}


// function appendSentences () {
//     var currentSentence = sentences[sentenceCounter],
//     splitSentence = currentSentence.split('');
//     splitSentence.forEach((s) => {
//         $('<span id="letter-' + i + '">' + s  + '</span>').appendTo(sentenceContainer);
//     });
// }