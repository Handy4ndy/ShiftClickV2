let score = 0;

let username = document.getElementById("Name")

let quiz = document.forms.Quiz.elements;

function checkAnswers() {
    /*let score = 10
    alert("well done your score was" + score)
*/
    let score = 0;

    quiz = document.forms.Quiz.elements;

    answer1 = quiz.html.value

    if (answer1 == "04") {

        score = score + 2;
    }

    answer2 = quiz.tags.value

    if (answer2 == "01") {

        score = score + 2;
    }

    answer3 = quiz.css.value

    if (answer3 == "03") {

        score = score + 2;
    }

    answer4 = quiz.java.value

    if (answer4 == "02") {

        score = score + 2;
    }

    if (score <=2){
    alert(`Unlucky ${username.value}, your score was ${score}`)
    }else if(score <=6){
        alert(`Nice work ${username.value}, your score is ${score}`)
    }else(score >6);{
        alert(`Well done ${username.value} you Smashed it !! your score is ${score}`)
    }
}

