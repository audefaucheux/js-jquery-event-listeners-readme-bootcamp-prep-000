//define functions here
function getIt() {
  $('p').on('click', function() {
    return alert('Hey!')
  });
}

function frameIt(){
  $('img').on('load', function() {
    return img.addClassName('tasty')
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();

});
