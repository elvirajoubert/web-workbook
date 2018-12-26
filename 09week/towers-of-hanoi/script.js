'use strict';

$(document).ready(function() {
  // Put app logic here
  //make draggable items drag
  $('[data-block]').draggable({
  revert:'invalid'
});
  //make droppable areas and append logic
$('[data-stack]').droppable({
  drop: function(event, ui){
      let $last = ($(this).children().last()).data('block');
      console.log(`last element on stack ${$last}`);
      let $dragging= $(ui.draggable).data('block');
      console.log(`last element on stack ${$dragging}`);
      if($dragging > $last){
        $(ui.draggable).draggable('option','revert', true);
      } else {
        $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
      }
      checkWin()
      }
});
  function checkWin(){
    if (($('[data-stack=3],[data-stack=2]').children().length) === 4)
    {
      console.log('win');
      $( "#announce-game-won" ).text( "WIN" );
    } else {
      console.log('lose');
        $( "#announce-game-won" ).text( "NOT YET" );
    }
  }
});


