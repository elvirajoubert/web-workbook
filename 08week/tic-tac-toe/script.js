'use strict';


// Switching between players + announcing the winner
$(document).ready(function() {

  var player = 1;
  $('.square').on('click', function(event) {
    var squareSelected = $(this);
    if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')) {
      alert('Oops! Select a blank square.');
    } else {
      if(player === 1) {
        squareSelected.addClass('fa fa-times');
        if(announceWinner('fa fa-times')) {
          $('#announce-winner p').append('<h3>and the winner is: Player 1 (X) !</h3><p>Please press \'Clear Board\' to start a new game!</p>');
        } else {
          player = 2;
        }
      } else {
        squareSelected.addClass('fa fa-circle-o');
        if(announceWinner('fa fa-circle-o')) {
          $('#announce-winner p').append('<h3>and the winner is: Player 2 (O) !</h3><p>Please press \'Clear Board\' to start a new game!</p>');
        } else {
          player = 1;
        }
      }
    }
  });


  // How to determine if there is 3 in a row
  function announceWinner(symbol) {
    if($('.zero').hasClass(symbol) && $('.one').hasClass(symbol) && $('.two').hasClass(symbol)) {
      return true;
    } else if($('.three').hasClass(symbol) && $('.four').hasClass(symbol) && $('.five').hasClass(symbol)) {
      return true;
    }else if($('.six').hasClass(symbol) && $('.seven').hasClass(symbol) && $('.eight').hasClass(symbol)) {
      return true;
    }else if($('.zero').hasClass(symbol) && $('.three').hasClass(symbol) && $('.six').hasClass(symbol)) {
      return true;
    }else if($('.one').hasClass(symbol) && $('.four').hasClass(symbol) && $('.seven').hasClass(symbol)) {
      return true;
    }else if($('.two').hasClass(symbol) && $('.five').hasClass(symbol) && $('.eight').hasClass(symbol)) {
      return true;
    }else if($('.zero').hasClass(symbol) && $('.four').hasClass(symbol) && $('.eight').hasClass(symbol)) {
      return true;
    }else if($('.two').hasClass(symbol) && $('.four').hasClass(symbol) && $('.six').hasClass(symbol)) {
      return true;
    } else {
      return false;
    }
  }
})

// reload game to reset
$(document).on('click', '#clear', function(){
  location.reload(true);
})
=======

let $currentStack;
let $current = null;
$('[data-stack]').click(function() {
  if ($current === null && $(this).children().length > 0) {
    $current = $(this).children().last().detach();
    $currentStack=$(this);
  }else if($(this).children().length > 0) {
    if($(this).children().last().data('block') < ($current.data('block'))) {
      //new code
      $current.appendTo($currentStack);
      $current = null;
    }else if($(this).children().last().data('block') > ($current.data('block'))) {
      $(this).append($current);
      $current = null;
    }
  }else if ($(this).children().length === 0) {
    $current.appendTo($(this));
    $current = null;
  }

  var $checkWinner = $('[data-stack="3"]').children().length;
  if ($checkWinner === 4) {
    alert('You win!');
  };
})


//announce winner

});

