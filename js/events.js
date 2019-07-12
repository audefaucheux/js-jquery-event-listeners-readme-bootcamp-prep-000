//define functions here
function getIt() {
  $('p').on('click', function() {
    return alert('Hey!')
  });
}

function frameIt(){
  $('img').on('load', function() {
    return img.classList.add('tasty')
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();

});
