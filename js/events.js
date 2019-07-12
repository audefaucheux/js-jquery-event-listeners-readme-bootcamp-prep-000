//define functions here
function getIt() {
  $('p').on('click', function() {
    return alert('Hey!')
  });
}

function frameIt(){
  $('img .tasty').on('load', function() {

  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();

});
