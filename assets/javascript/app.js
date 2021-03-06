// start game with click of start button 
// runs the process
$(".btn-primary").on("click", function(event) {
$(".btn-primary").hide();
timer();
mainPage();
endPage()

});

// declare variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time;
var timecounter = 100;
var userAnswer;
var correctAnswer = ["Thyroid Gland", "Erythrocyte", "23", "4", "Apoptosis"];



// create timer conditions

function timer() {
    time = setInterval(myClock, 1000);

    function myClock() {
        if (timecounter === 0) {
            clearInterval(time);
            timeout();

        }
        if (timecounter > 0) {
            timecounter--;
        }
       $(".clock").html(timecounter);
    }

};


    // User answer
$("#container").on("click", ".checkbox-inline", function(event)  {
    
    userAnswer = $(this).text().trim();
    console.log(userAnswer);
    answerCheck();
   
    
});
    
//labels and names
//function build answer array
// compare two array
   //var ans1 = "Thyroid Gland"
   //console.log(ans1)
    
   // check if answer is right or wrong when box is checked 
  function answerCheck() {  
    //for(j = 0; j < userAnswers.length; j++) {
        var found = false;
    for (i = 0; i < correctAnswer.length; i++) {    
        if (userAnswer === correctAnswer[i]) {
            found = true;
            break;
         } 
    }  
    if (found) {
        console.log("right");
        correct++;
    } else {
        console.log("wrong");
        incorrect++;
    }

    
    
  }
//}



// create question and answer page after clicking start button
// bootstrap for checkbox

function mainPage() {

html = "<h3>Time Remaining:  <div class = clock>" + timecounter + "</div></h3>" +
"<h4>Which gland in the body regulates metabolism?" +
"<br>" +
    '<label class="checkbox-inline"><input type="radio" name="glands" value=""> Adrenal Gland</label>' +
    '<label class="checkbox-inline"><input type="radio" name="glands" value=""> Thyroid Gland</label>' +
    '<label class="checkbox-inline"><input type="radio" name="glands" value=""> Pineal Gland</label>' +
"</h4>" +

"<h4>Which type of cells utilize the molecule Hemoglobin?" +
    "<br>" +
        '<label class="checkbox-inline"><input type="radio" name="cells" value=""> Erythrocyte</label>' +
        '<label class="checkbox-inline"><input type="radio" name="cells" value=""> Lymphocyte</label>' +
        '<label class="checkbox-inline"><input type="radio" name="cells" value=""> Basophil</label>' +
    "</h4>" +

    "<h4>How many pairs of chromosomes are found in the average human?" +
    "<br>" +
        '<label class="checkbox-inline"><input type="radio" name="number" value=""> 23</label>' +
        '<label class="checkbox-inline"><input type="radio" name="number" value=""> 46</label>' +
        '<label class="checkbox-inline"><input type="radio" name="number" value=""> 22</label>' +
    "</h4>" +

    "<h4>A human heart has how many chambers?" +
    "<br>" +
        '<label class="checkbox-inline"><input type="radio" name="chambers" value=""> 3</label>' +
        '<label class="checkbox-inline"><input type="radio" name="chambers" value=""> 2</label>' +
        '<label class="checkbox-inline"><input type="radio" name="chambers" value=""> 4</label>' +
    "</h4>" +

    "<h4>Programmed cell death is also known as what?" +
    "<br>" +
        '<label class="checkbox-inline"><input type="radio" name="process" value=""> Metastisis</label>' +
        '<label class="checkbox-inline"><input type="radio" name="process" value=""> Angiogenesis</label>' +
        '<label class="checkbox-inline"><input type="radio" name="process" value=""> Apoptosis</label>' +
    "</h4>" +

    '<div id = submit><button type="button" class="btn btn-primary btn-lg">Submit</button></div>';



    $(".questionPage").html(html);
    
    
   
}


function endPage() {
    $(".btn-primary").on("click", function () {
        
       //var submit = true
        html = "<h2>Finished!</h2> <br><h4>Correct Answers: " + correct + "<br><h4>Incorrect Answers: " + incorrect + "</h4><br><h4>Unanswered: " + unanswered + "</h4>";

     $(".questionPage").html(html);

     })
};

function timeout() {

    html = "<h2>Finished!</h2> <br><h4>Correct Answers: " + correct + "<br><h4>Incorrect Answers: " + incorrect + "</h4><br><h4>Unanswered: " + unanswered + "</h4>";

     $(".questionPage").html(html);
}

