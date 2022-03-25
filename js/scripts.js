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
    $("#javascript").hide();
    $("#cSharp").hide();
    $("#ruby").hide();
    $("#piet").hide();

    if (questionInput < "10") {
      $("#javascript").fadeIn();
    } else if (questionInput >= "10" && questionInput <= "19") {
      $("#cSharp").fadeIn();
    } else if (questionInput >= "20" && questionInput <= "25") {
      $("#ruby").fadeIn();
    } else if (questionInput >= "26") {
      $("#piet").fadeIn();
    };
  });
});