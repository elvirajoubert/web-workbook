'use strict'
function checkIfComplete() {

    // console.log('checking if complete');

    if (isComplete == false) {
        isComplete = true;
    } else {
        place = 'second';
    }
}

 $('#go').click(function () {
    console.log('onclick function');
    $('marvel').animate ()
    $('#figure1').animate({left: '1500px'});
    $('#figure2').animate({left: '1200px'});
    
     checkIfComplete();
    
 });

//  var wonderWomanPixels = Math.floor((Math.random() * 3000) + 1);
//  var airesPixels = Math.floor((Math.random() * 3000) + 1);


var marvelWidth = $(".marvel").width();
var marvelWidth = $(".figure1").width() - marvelWidth;
var trackWidth = $(window).width() - marvelWidth;
var raceTime1 = Math.floor((Math.random() * 3000) + 1);
var raceTime2 = Math.floor((Math.random() * 3000) + 1);

var isComplete = false;
var place = 'first';

//figure animation

$("#figure1").click(function(){
$('#figure1').animate({left: trackWidth},
raceTime1, function () {
checkIfComplete();
$('#raceInfo1 span').text(' Finished ' + '  and clocked in at ' + raceTime1 + ' milliseconds! ');
        
});
})

$('#figure2').animate({left: trackWidth}, 
raceTime2, function () {
checkIfComplete();
$('#raceInfo2 span').text(' Finished ' + '  and clocked in at ' + raceTime2 + ' milliseconds! ');

});


//reset button

$('#reset').click(function () {
    $('.marvel').css('left', '0');
    $('.raceInfo span').text('');
});