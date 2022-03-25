$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const favMeal = parseInt($("input#fav-meal").val());
    const book = parseInt($("input#book-genre").val());
    const streaming = parseInt($("input#streaming").val());
    const movie = parseInt($("input#fav-movie").val());
    const food = parseInt($("input#food").val());
    const wierdQuestions = parseInt($("input#wierd-questions").val());
    const questionInput = (favMeal + book + streaming + movie + food + wierdQuestions);

    if (questionInput)
  })
})