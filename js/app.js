$(document).ready(function(){

	// Quiz Question Array

	var questions = [{
			question: "Question 1 of 5: How many stars are in the Andromeda galaxy?",
			choices: ["10 billion", "100 billion", "1 trillion", "3 trillion"],
			correct: 2,
			explanation: "The Andromeda galaxy has about 1 trillion stars."
		},
		{
			question: "Question 2 of 5: Which of the following is not one of Saturn's moons?",
			choices: ["Suttungr", "Kale", "Skoll", "Rhea"],
			correct: 1,
			explanation: "Suttungr, Skoll, and Rhea are all moons of Saturn. Kale however, is a moon of Jupiter.",
		},
		{
			question: "Question 3 of 5: What is the approximate diameter of the Milky Way?",
			choices: ["220,000 light-years", "250,000 light-years", "300,000 light-years", "600,000 light-years" ],
			correct: 0,
			explanation: "The Milky Way galaxy has a diameter of about 220,000 light-years."
		},
		{
			question: "Question 4 of 5: Sombrero is what kind of galaxy?",
			choices: ["Spiral", "Interacting Spirals", "Giant Elliptical", "Barred Spiral"],
			correct: 3,
			explanation: "Sombrero, like the Milky Way, is also a barred spiral galaxy."
		},
		{
			question: "Question 5 of 5: How many spherical Earths could fit inside a hollow sun?",
			choices: ["930,000", "960,000", "990,000", "1,200,000"],
			correct: 1,
			explanation: "About 960,000 spherical Earths could fit inside a hollow sun."
		},
	];

	// Application Functionality

  var currentQuestion = 0;
  var correctAnswers = 0

	function fillFormWithQuestion (questionNumber) {
		$("#question").html (questions[questionNumber].question);
		var answerSpans = $(".answer");
		for (var i = 0; i < 4; i++) {
			$(answerSpans[i]).html (questions[questionNumber].choices[i]);
		}
	}

	fillFormWithQuestion (0);

	$('#question-form').submit(function(event) {
	  $('.explanation').html(questions[currentQuestion].explanation);
	  var userInput = $('input[type=radio]:checked').val();

	  console.log('question:', questions[currentQuestion]);
	  console.log('correct:',questions[currentQuestion].correct);
	  console.log('user:', userInput);

	  if (questions[currentQuestion].correct == userInput) {
	    correctAnswers++;
	  }
	  $('input[type=radio]').removeAttr("checked");
	  currentQuestion++;

	  if (currentQuestion <= 4) {
	    fillFormWithQuestion(currentQuestion);
	  } else {
	    $('#question').html("Congratulations on completing this quiz! You got "+correctAnswers+"/5 right!")
	    $('input').hide();
	    $('.answer').hide();
	    $('#submit').html("Try Again!");
	  }
	  return false;
	});

});
