//define functions here
function getIt() {
  $('p').on('click', function() {
    return alert('Hey!')
  });
}

function frameIt(){
  $('img').on('load', function() {
    return $('img').addClass('tasty')
  });
}

function pressIt() {
  $('document').on('keydown', function(e) {
    if(key.which === 91) {
      return alert('You pressed g');
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    return alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
