$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const favMeal = parseInt($("#fav-meal").val());
    const book = parseInt($("#book-genre").val());
    const streaming = parseInt($("#streaming").val());
    const movie = parseInt($("#fav-movie").val());
    const food = parseInt($("#food").val());
    const wierdQuestions = parseInt($("#wierd-questions").val());
    const questionInput = favMeal + book + streaming + movie + food + wierdQuestions;

    if (questionInput < 10) {
      $("#javascript").show();
    }
  });
});