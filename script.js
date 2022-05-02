
var button1 = document.getElementById('button1');

var carousel1 = document.getElementById('carousel1');

var caption2 = document.getElementById('caption2');


var btncon1 = document.getElementById('btncon1');



button1.addEventListener('click', showAnswer );


function showAnswer() {
    btncon1.style.display = 'block';
};

button1.addEventListener('click', hideButton );

function hideButton() {
    button1.style.display ='none';

};


button1.addEventListener('click', activateCarousel );

function activateCarousel() {
    carousel1.setAttribute("class","carousel-item active");

};

button1.addEventListener('click', displayCaption );

function displayCaption() {
    
    caption2.style.display = 'block';
    
    };


      

       var timeLeft = 100;

       button1.addEventListener('click', countdown );
       


function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String(timeLeft);
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};

 var correctAnswers =[
    document.getElementById('ans1'),
    document.getElementById('ans2'),
    document.getElementById('ans3'),
    document.getElementById('ans4'),
    document.getElementById('ans5'),
    document.getElementById('ans6'),
    document.getElementById('ans7'),
    document.getElementById('ans8'),
    document.getElementById('ans9'),
    document.getElementById('ans10'),
];

correctAnswers[0].addEventListener('click',calculateScore);
correctAnswers[1].addEventListener('click',calculateScore);
correctAnswers[2].addEventListener('click',calculateScore);
correctAnswers[3].addEventListener('click',calculateScore);
correctAnswers[4].addEventListener('click',calculateScore);
correctAnswers[5].addEventListener('click',calculateScore);
correctAnswers[6].addEventListener('click',calculateScore);
correctAnswers[7].addEventListener('click',calculateScore);
correctAnswers[8].addEventListener('click',calculateScore);
correctAnswers[9].addEventListener('click',calculateScore);


var timeLeft = 100;

button1.addEventListener('click', countdown );



function countdown() {
timeLeft--;
document.getElementById("seconds").innerHTML = String(timeLeft);
if (timeLeft > 0) {
 setTimeout(countdown, 1000);
}
};



var score= 0;


function calculateScore() {
    score++;
    document.getElementById("scoreCount").innerHTML = String(score);
    score+1;
    
    }

correctAnswers[0].addEventListener('click',disableButton);
correctAnswers[1].addEventListener('click',disableButton);
correctAnswers[2].addEventListener('click',disableButton);
correctAnswers[3].addEventListener('click',disableButton);
correctAnswers[4].addEventListener('click',disableButton);
correctAnswers[5].addEventListener('click',disableButton);
correctAnswers[6].addEventListener('click',disableButton);
correctAnswers[7].addEventListener('click',disableButton);
correctAnswers[8].addEventListener('click',disableButton);
correctAnswers[9].addEventListener('click',disableButton);

function disableButton() {
    
}



        
    

    

   


   
   














 
    
    
    
    
    
    
    
      