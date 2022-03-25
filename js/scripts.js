$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const frontBack = parseInt($("input#front-or-back").val());
    const book = parseInt($("input#book-genre").val());
    const streaming = parseInt($("input#streaming").val());
    const movie = parseInt($("input#fav-movie").val());
    const food = parseInt($("input#food").val());
    const wierdQuestions = parseInt($("input#wierd-questions").val());
  })
})