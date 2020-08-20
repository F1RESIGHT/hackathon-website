let score = 0;
let currentQuestion = 0;
let questions = [{
    title: "In 2012, climate and severe weather disasters cost the U.S. economy more than" ,
    answers: ['$100 million','$1 billion','$100 billion'],
   
    correct: 2,
  },
  {
   title: "Greenland has lost an average of how many tons of ice per year between 1993 and 2016?",
   answers: ['28 million', '28 billion','280 billion'],
   correct: 2
  },
  {
   title: "Since the beginning of the Industrial Revolution, the acidity of surface ocean waters has increased by how much?",
   answers: ['30 percent','40 percent', '50 percent'],
   correct: 0
  },
  {
   title: "Between 2030 and 2050, climate change is expected to cause approximately how many additional deaths per year, from malnutrition, malaria, diarrhea and heat stress?",
   answers: ['100,000', '250,000','500,000'],
   correct: 1
  },
  {
   title: "In the Northeast and Upper Midwest, warmer winter and spring temperatures have led to an increase in both the distribution and the number of reported cases of this tick-borne illness.",
   answers: ['Lyme Disease ','Rocky Mountain Spotted Fever','Tularemia'],
   correct: 0
  },
  {
   title: "Which country announced it is moving its capital since the current one is sinking?",
   answers: ['Cuba', 'Indonesia ','Japan'],
   correct: 1
  },
  {
   title: "Today there are roughly how many people who are chronically undernourished",
   answers: ['200 million', '400 million', '800 million'],
   correct: 2
  },
  {
   title: "The greenhouse effect is a process that occurs when ",
   answers: [' Gases in Earth atmosphere trap the Suns heat ',' My Grandma puts flowers by the window ',' My dad decides to paint our house green '],
   correct: 0
  },
  {
    title: "How can I help with climate change?",
    answers: ['Turn off lights when not in use', 'Take long showers', 'Ask my parents to drive even if I could bike or walk instead'],
    correct: 0
  },
  {
    title: "How can I help end world hunger?",
    answers: ['Ignore there is a problem with world hunger', 'Volunteer my time to pack "care packages" or collect canned food from neighbors to deliver to a local food bank', 'Waste as much food as possible'],
    correct: 1
  },
  ];
  



    $(document).ready(function () {

      $('.start a').click(function (e) {
          e.preventDefault();
          $('.start').hide();
          $('.quiz').show();
          showQuestion();
        });

            $('.quiz ul').on('click', 'li', function () {
                $('.selected').removeClass('selected');
                $(this).addClass('selected');
            });

            $('.quiz a').click(function (e) {
                e.preventDefault();
                if ($('li.selected').length) {
                    let guess = parseInt($('li.selected').attr('id'));
                    let isCorrect = $('li.selected').attr('isCorrect');
                    checkAnswer(guess, isCorrect);
                } else {
                    alert('Please select an answer');
                }
            });

            $('.summary a').click(function (e) {
                e.preventDefault();
                restartQuiz();
            });

        });

        function showQuestion() {
            let question = questions[currentQuestion];
            $('.quiz h2').text(question.title);
            $('.quiz ul').html('');
            for (var i = 0; i < question.answers.length; i++) {
                $('.quiz ul').append(`<li isCorrect="true" id="${i}">${question.answers[i]}</li>`);
            }
            showProgress();
        }
       

        function showIncorrectQuestion(guess) {
            let question = questions[currentQuestion];
            $('.quiz h2').text(question.title);
            $('.quiz ul').html('');
            for (var i = 0; i < question.answers.length; i++) {
                let cls = i === question.correct ? "selected" : guess === i ? "wrong" : ""
                $('.quiz ul').append(`<li id="${i}" isCorrect="false" class="${cls}">${question.answers[i]}</li>`);
            }
            showProgress();
        }

        function checkAnswer(guess, isCorrect) {

            let question = questions[currentQuestion];
            if (question.correct === guess) {
                if (isCorrect === 'true') {
                    score++;
                }
                showIsCorrect(true);
                currentQuestion++;
                if (currentQuestion >= questions.length) {
                    showSummary();
                } else {
                    showQuestion();
                }
            } else {
                showIsCorrect(false);
                showIncorrectQuestion(guess);
            }


        }

        function showSummary() {
            $('.quiz').hide();
            $('.summary').show();
            $('.summary p').text("Thank you for taking the quiz! Here's how you scored. You answered " + score + " out of " + questions.length + " correctly! Care to try again?")
        }

        function restartQuiz() {
            $('.summary').hide();
            $('.quiz').show();
            score = 0;
            currentQuestion = 0;
            showQuestion();
        }

        function showProgress() {
            $('#currentQuestion').html(currentQuestion + " out of " + questions.length);
        }

        function showIsCorrect(isCorrect) {
            var result = "Wrong";
            if (isCorrect) {
                result = "Correct";
            }
            $('#isCorrect').html(result);
        
 
    }
function changeimgwater() {
        var img = document.getElementById('ocean').src;
        if (img.indexOf('Plastic-Ocean.jpeg')!=-1) {
            document.getElementById('ocean').src  = 'https://static.scientificamerican.com/sciam/cache/file/BCC3BD1E-5DC0-4843-A841706AE575C694_source.jpg?w=590&h=800&39BBF62E-5F96-4C6A-A59590CCF416DA11';
        }
         else {
           document.getElementById('ocean').src = 'Plastic-Ocean.jpeg';
       }

    }
    function changeimgland() {
        var img = document.getElementById('land').src;
        if (img.indexOf('deforest.jpeg')!=-1) {
            document.getElementById('land').src  = 'https://images.unsplash.com/photo-1441312311734-f44cc0bda31d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80';
        }
         else {
           document.getElementById('land').src = 'deforest.jpeg';
       }
    }

   function cleanocean() {
  var bottle = document.getElementById("water");
  bottle.remove();
}
  function removechainsaw() {
  var chainsaw = document.getElementById("forest");
  chainsaw.remove();

}






      
      


  

