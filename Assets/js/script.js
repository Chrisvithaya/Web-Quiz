var injectHere = document.querySelector('#injectHere');
var ding = document.querySelector('#ding');
var timer = document.querySelector('#timer');
var secondsLeft = 60;
var timerInterval;
var playerScore = 0;
ding.addEventListener('click', function(){
    injectHere.innerHTML = ''
    question1();
    setTime();
})


function setTime() {
  // Sets interval in variable
    timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = `Timer: ${secondsLeft}` ;
    if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        timer.textContent = 'Out of time!'
      }
  
  }, 1000);
}

function wrongAnswer(){
    clearInterval(timerInterval);
    secondsLeft -= 10;
    setTime();
}

function correctAnswer(){
    playerScore += 20;
}

function question1(){
    var Question1 = document.createElement('h2');
    Question1.textContent = '1) HTML stands for -';
    var answer1A = document.createElement('button');
    answer1A.textContent = 'a. HighText Machine Language' ;
    answer1A.addEventListener('click', function(){
        wrongAnswer();
        question2();
    })
    var answer1B = document.createElement('button');
    answer1B.textContent = 'b. HyperText Markup Language';
    answer1B.addEventListener('click', function(){
        wrongAnswer();
        question2();
    })
    var answer1C = document.createElement('button');
    answer1C.textContent = 'c. None of these';
    answer1C.addEventListener('click', function(){
        wrongAnswer();
        question2();
    })
    var answer1D = document.createElement('button');
    answer1D.textContent = 'd. HyperText Markup Language';
    answer1D.addEventListener('click', function(){
        correctAnswer();
        question2();
    })
    
    
    injectHere.append(Question1, answer1A, answer1B, answer1C, answer1D);

}
function question2(){
    injectHere.innerHTML = '';
    var Question2 = document.createElement('h2');
    Question2.textContent = '2) Which of the following tag is used for inserting the largest heading in HTML?';
    var answer2A = document.createElement('button');
    answer2A.textContent = 'a. <h1>' ;
    answer2A.addEventListener('click', function(){
        correctAnswer();
        question3();
    })
    var answer2B = document.createElement('button');
    answer2B.textContent = 'b. <h3>';
    answer2B.addEventListener('click', function(){
        wrongAnswer();
        question3();
    })
    var answer2C = document.createElement('button');
    answer2C.textContent = 'c. <h5>';
    answer2C.addEventListener('click', function(){
        wrongAnswer();
        question3();
    })
    var answer2D = document.createElement('button');
    answer2D.textContent = 'd. <h1000>';
    answer2D.addEventListener('click', function(){
        wrongAnswer();
        question3();
    })
    
    
    injectHere.append(Question2, answer2A, answer2B, answer2C, answer2D);

}

function question3(){
    injectHere.innerHTML = '';
    var question3 = document.createElement('h2');
    question3.textContent = '3) How to create an unordered list (a list with the list items in bullets) in HTML?';
    var answer3A = document.createElement('button');
    answer3A.textContent = 'a. <ol>' ;
    answer3A.addEventListener('click', function(){
        wrongAnswer();
        question4();
    })
    var answer3B = document.createElement('button');
    answer3B.textContent = 'b. <ul>';
    answer3B.addEventListener('click', function(){
        correctAnswer();
        question4();
    })
    var answer3C = document.createElement('button');
    answer3C.textContent = 'c. <i>';
    answer3C.addEventListener('click', function(){
        wrongAnswer();
        question4();
    })
    var answer3D = document.createElement('button');
    answer3D.textContent = 'd. <li>';
    answer3D.addEventListener('click', function(){
        wrongAnswer();
        question4();
    })
    
    
    injectHere.append(question3, answer3A, answer3B, answer3C, answer3D);

}

function question4(){
    injectHere.innerHTML = '';
    var question4 = document.createElement('h2');
    question4.textContent = '4)  Which of the following attribute is used to provide a unique name to an element?';
    var answer4A = document.createElement('button');
    answer4A.textContent = 'a. None of the above' ;
    answer4A.addEventListener('click', function(){
        wrongAnswer();
        question5();
    })
    var answer4B = document.createElement('button');
    answer4B.textContent = 'b. class';
    answer4B.addEventListener('click', function(){
        wrongAnswer();
        question5();
    })
    var answer4C = document.createElement('button');
    answer4C.textContent = 'c. type';
    answer4C.addEventListener('click', function(){
        wrongAnswer();
        question5();
    })
    var answer4D = document.createElement('button');
    answer4D.textContent = 'd. id';
    answer4D.addEventListener('click', function(){
        correctAnswer();
        question5();
    })
    
    
    injectHere.append(question4, answer4A, answer4B, answer4C, answer4D);

}

function question5(){
    injectHere.innerHTML = '';
    var question5 = document.createElement('h2');
    question5.textContent = '5) Which of the following HTML attribute is used to define inline styles?';
    var answer5A = document.createElement('button');
    answer5A.textContent = 'a. type' ;
    answer5A.addEventListener('click', function(){
        wrongAnswer();
        finishedPage();
    })
    var answer5B = document.createElement('button');
    answer5B.textContent = 'b. None of the above';
    answer5B.addEventListener('click', function(){
        wrongAnswer();
        finishedPage();
    })
    var answer5C = document.createElement('button');
    answer5C.textContent = 'c. class';
    answer5C.addEventListener('click', function(){
        wrongAnswer();
        finishedPage();
    })
    var answer5D = document.createElement('button');
    answer5D.textContent = 'd. style';
    answer5D.addEventListener('click', function(){
        correctAnswer();
        finishedPage();
    })
    
    
    injectHere.append(question5, answer5A, answer5B, answer5C, answer5D);

}

function finishedPage(){
    clearInterval(timerInterval);
    injectHere.innerHTML = '';
    var finishedText = document.createElement('h1');
    finishedText.textContent = 'All Completed!';

    var nameBox = document.createElement('input');
    nameBox.type = 'text';
    nameBox.placeholder = 'Enter Name';
    
    
    var submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'

    submitBtn.addEventListener('click', function(){
        if(nameBox.value.length > 0){

            var userScore = `Score: ${playerScore} by ${nameBox.value}`
            SaveToLocalStorage(userScore);
            highScores();
        }
    })
    injectHere.append(finishedText, nameBox, submitBtn)

}

function SaveToLocalStorage(stats)
{
    var scores = GetLocalStorage();
    scores.push(stats);
    localStorage.setItem('Scores', JSON.stringify(scores) )
}
function GetLocalStorage()
{
   
    var localStorageData = localStorage.getItem('Scores');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

function highScores(){
    injectHere.innerHTML = '';
    var scores = GetLocalStorage();
    var announcement = document.createElement('h1')
    announcement.textContent = 'High Scores!'
    
    var homeBtn = document.createElement('button')
    homeBtn.textContent = 'Return Home'
    homeBtn.addEventListener('click', function(){
        location.reload();
    })

    var clearBtn = document.createElement('button')
    clearBtn.textContent = 'Clear Score'
    clearBtn.addEventListener('click', function(){
        localStorage.clear();
        announcement.innerHTML = 'High Scores!'
    })

    
    for(var i = 0; i< scores.length; i++)
    {
        var playerText = document.createElement('p');
        playerText.textContent = scores[i];
        announcement.append(playerText);
    }

    injectHere.append(announcement, homeBtn, clearBtn);

}

